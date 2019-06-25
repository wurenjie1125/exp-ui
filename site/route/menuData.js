const menuData = [
  {
    route: "/quick-start",
    menuName: "快速上手",
  },
  {
    route: "/components",
    menuName: "组件",
    childRoute: [
      {
        route: "",
        menuName: "操作反馈",
        childRoute: [
          {
            route: "/button",
            menuName:"Button 按钮",
            component:require('@/components/button').default
          }
        ]
      },
      {
        route: '',
        menuName: "数据录入",
        childRoute:[
          {
            route: "/input",
            menuName:"Input 输入框",
            component:require('@/components/input').default
          }
        ]
      }
    ]
  }
];
export default menuData
