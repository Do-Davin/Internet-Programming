import { createRouter, createWebHistory } from "vue-router";
import SectionComponent from "@/components/SectionComponent.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/page_1" },
    {
      path: "/page_1",
      name: "PageOne",
      component: () => import('@/views/PageOne.vue'),
      children: [
        {
          path: "section/:selectId",
          name: "Page1Section",
          component: SectionComponent,
          props: {
            pageId: 1
          }
        },
      ],
    },
    {
      path: "/page_2",
      name: "PageTwo",
      component: () => import('@/views/PageTwo.vue'),
      children: [
        {
          path: "section/:selectId",
          name: "Page2Section",
          component: SectionComponent,
          props: {
            pageId: 2
          }
        },
      ],
    },

    {
      path: "/page_3",
      name: "PageThree",
      component: () => import('@/views/PageThree.vue'),
      children: [
        {
          path: "section/:selectId",
          name: "Page3Section",
          component: SectionComponent,
          props: {
            pageId: 3
          }
        },
      ],
    },
  ],
});

export default router;
