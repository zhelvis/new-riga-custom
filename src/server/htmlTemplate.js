const htmlTemplate = (html, helmet, css, scripts) =>
  `<!DOCTYPE html>
<html ${helmet.htmlAttributes.toString()}>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <style id="jss-server-side">${css}</style>
</head>   
<body>
    <div id="root">${html}</div>
    ${scripts}
</body>
</html>`

export default htmlTemplate
