export const createAppStore = (props) => {
    return {
        params: [],
        addParams: function (line){
            this.params.push(line)
            console.log()
        },
        test: props.test || 'Hello world',
        toggleTest: function (param) {
            this.test = param
        },
    };
};