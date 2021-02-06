module.exports = app => {
  return class HomeController extends app.Controller {
    async server() {
      const { ctx } = this; 
      // home/index.js 对应 app/web/page/home/index.jsx webpack 构建后 JSBundle 文件
      await ctx.render('home/index.js', { message: 'egg react server side render' });
    }

    async client() {
      const { ctx } = this;
      // renderClient 前端渲染，Node层只做 layout.html 和资源依赖组装，渲染交给前端渲染。
      // 与服务端渲染的差别你可以通过查看运行后页面源代码即可明白两者之间的差异
      await ctx.renderClient('home/index.js', { message: 'egg react client render' });
    }
  };
};