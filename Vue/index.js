new Vue({
    el:'#app',
    //数据
    data() {
        return {
            editor:'编辑器',
            key:{
                editor:'editor'
            },
            url:'http://localhost:44387/api/markdown'
        }
    },
    //计算属性
    computed: {
        editorPreview(){
            return marked(this.editor);
        }
    },
    //侦听器
    watch: {
        editor(val){
            //localStorage.setItem('editor',this.editor);
            this.save();
        }
    },
    //生命周期钩子
    created() {
        this.load();
        //this.editor=localStorage.getItem(this.key.editor)||'第一次使用Markdown笔记本';
    },
    methods: {
        load(){
            var that=this;
            axios.get(that.url).then(function(result){
                console.log(result.data);
                that.editor=result.data;
            })
        },
        save(){
            var that=this;
            axios.post(that.url,{content:that.editor}).then(function(result){

            });
        }
    },
})