const { Keystone } = require("@keystonejs/keystone");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const {
  Text,
  Checkbox,
  Password,
  Relationship
} = require("@keystonejs/fields");
// const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const initialiseData = require("./initial-data");

const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");

const PROJECT_NAME = "New Riga Custom";

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
  onConnect: initialiseData,
  secureCookies: false, // todo: config secureCookies behind proxy
});

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) =>
  Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }
  return { id: user.id };
};
const userIsAdminOrOwner = auth => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};
const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

const publicAccess = {
  read: true,
  update: access.userIsAdminOrOwner,
  create: access.userIsAdmin,
  delete: access.userIsAdmin,
}

keystone.createList("User", {
  label: "Пользователи",
  singular: "Пользователь",
  plural: "Пользователи",
  fields: {
    name: { type: Text, label: "Имя" },
    email: {
      type: Text,
      isUnique: true,
      label: "Почта"
    },
    isAdmin: { type: Checkbox, label: "Админ?" },
    password: {
      type: Password,
      label: "Пароль"
    }
  },
  access: publicAccess
});

keystone.createList("ServiceGroup", {
  label: "Разделы услуг",
  singular: "Раздел услуг",
  plural: "Разделы услуг",
  fields: {
    name: { type: Text, label: "Раздел" },
    services: {
      type: Relationship,
      ref: "Service.group",
      many: true,
      label: "Услуги"
    }
  },
  access: publicAccess
});

keystone.createList("Service", {
  label: "Услуги",
  singular: "Услуга",
  plural: "Услуги",
  fields: {
    name: { type: Text, label: "Наименование" },
    group: { type: Relationship, ref: "ServiceGroup.services", label: "Раздел" }
  },
  access: publicAccess
});

keystone.createList("PageContentBlock", {
  label: "Контент",
  singular: "Контент",
  plural: "Контент",
  fields: {
    name: { type: Text, label: "Страница" },
    block: { type: Text, label: "Блок"},
    content: {
      type: Text,
      label: "Контент",
      isMultiline: true
    },
  },
  labelField: 'block',
  access: publicAccess
})

keystone.createList("Contact", {
  label: "Контакты",
  singular: "Контакт",
  plural: "Контакты",
  fields: {
    name: { type: Text, label: "Имя"},
    type: { type: Text, label: "Тип"},
    displayText: { type: Text, label: "Текст" },
    link: { type: Text, label: "Ссылка" }
  },
  access: publicAccess
});

keystone.createList("Advantage", {
  label: "Преимущества",
  singular: "Преимущество",
  plural: "Преимущества",
  fields: {
    title: { type: Text, label: "Заголовок"},
    img: { type: Text, label: "Изображение" },
    description: { type: Text, label: "Описание", isMultiline: true},
  },
  labelField: 'title',
  access: publicAccess
});

keystone.createList("PageMetaDataField", {
  label: "Метаданные",
  singular: "Метаданные",
  plural: "Метаданные",
  fields: {
    name: { type: Text , label: "Страница"},
    title: { type: Text, label: "Заголовок"},
    description: { type: Text, label: "Описание", isMultiline: true},
  },
  access: publicAccess
});

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User"
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      authStrategy
    })
  ]
};
