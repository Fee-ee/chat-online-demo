module.exports = {
    devServer: {
        host: "localhost",
        port:8080,
        https:false,
        open:true,
        index:'login.html',
        proxy:{
            "/api":{
                target:"http://localhost:3000",
                changeOrigin: true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    },
    pages: {
        login: {
            // page 的入口
            entry: "src/login/main.js",
            // 模板来源
            template: "public/index.html",
            // 在 dist/index.html 的输出
            filename: "login.html",
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: "Login Page",
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ["chunk-vendors", "chunk-common", "login"]
        },
        chat_page: {
            // page 的入口
            entry: "src/main_page/main.js",
            // 模板来源
            template: "public/index.html",
            // 在 dist/index.html 的输出
            filename: "chat.html",
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: "chat Page",
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ["chunk-vendors", "chunk-common", "chat_page"]
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        subpage: "src/login/main.js"
    }
}
