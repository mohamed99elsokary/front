<template>
  <main class="post">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 right">
          <h1>
            {{ post.title }}
          </h1>
          <img class="w-100 lazy" :src="post.image" :alt="post.title" />
          <div v-html="post.content"></div>
        </div>
        <div class="left col-lg-3">
          <div class="side-adv mb-4">
            <iframe
              src="//pantomimethat.com/watchnew?key=004586c55d6d74860332e0838b91e0e5"
              width="300"
              height="250"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>
          <div class="side-adv">
            <iframe
              src="//pantomimethat.com/watchnew?key=004586c55d6d74860332e0838b91e0e5"
              width="300"
              height="250"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>



<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Post",

  data() {
    return {
      id: this.$route.params.id,
      post: null,
    };
  },
  metaInfo: {
    meta: [
      { name: "keywords", content: " " },
      { name: "description", content: " " },
    ],
  },

  methods: {
    ...mapActions("postsModule", ["getPost"]),
  },

  computed: {
    ...mapGetters("postsModule", ["posts"]),
  },

  async created() {
    this.post = await this.getPost(this.id);

    document.title = this.post.title + " | يلا شوت الكورة";
    document.head
      .querySelector('meta[name="keywords"]')
      .setAttribute("content", this.post.title.split(" "));
    document.head
      .querySelector('meta[name="description"]')
      .setAttribute("content", this.post.title);
  },
  mounted() {},
};
</script>