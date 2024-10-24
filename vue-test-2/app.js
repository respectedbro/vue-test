const App = {
  data() {
    return {
      placeholderString: "Введите название заметки",
      title: "Список заметок",
      inputValue: "",
      notes: ["Заметка 1", "Заметка 2"],
    };
  },
  methods: {
    addNewNote() {
        if(this.inputValue.trim() !== '') {
            this.notes.push(this.inputValue);
            this.inputValue = "";
        }
    },
    toUpperCase(item) {
      return item.toUpperCase()
    },
    removeNode(i) {
      this.notes.splice(i, 1);
    },
  },
  computed: {
    doubleCountComputed() {
      console.log('doubleCountComputed')
      return this.notes.length * 2
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = ''
      }
    }
  }
};

Vue.createApp(App).mount("#app");
