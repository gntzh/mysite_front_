const Home = () => import("@/views/blog/Home.vue");
const PostDetail = () => import("@/views/blog/PostDetail.vue");
const Editor = () => import("@/views/blog/Editor.vue");
const TagDetail = () => import("@/views/blog/TagDetail.vue");
const CategoryDetail = () => import("@/views/blog/CategoryDetail.vue");
const CategoryEdit = () => import("@/views/blog/CategoryEdit.vue");

export default [
  {
    path: "/blog/cate_edit",
    name: "cate_edit",
    component: CategoryEdit,
    meta: {
      title: "编辑分类",
      requireAuth: true
    }
  },
  {
    path: "/blog",
    name: "blog",
    component: Home,
    meta: {
      title: "博客",
      keepAlive: true
    }
  },
  {
    path: "/blog/:id/edit",
    name: "post_update",
    component: Editor,
    meta: {
      title: "编辑",
      requireAuth: true
    }
  },
  {
    path: "/blog/:id",
    name: "post_detail",
    component: PostDetail,
    meta: {
      title: "博客"
    }
  },
  {
    path: "/tag/:id",
    name: "tag_detail",
    component: TagDetail,
    meta: {
      title: "标签"
    }
  },
  {
    path: "/category/:id",
    name: "cate_detail",
    component: CategoryDetail,
    meta: {
      title: "分类"
    }
  },
  {
    path: "/write",
    name: "write",
    component: Editor,
    meta: {
      title: "编辑",
      requireAuth: true
    }
  }
];
