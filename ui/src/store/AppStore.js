export const createAppStore = (props) => {
    return {
        // params: [{
        //     neck: 0,
        //     wrist: 0,
        //     forearm: 0,
        //     biceps: 0,
        //     belly: 0,
        //     hip: 0,
        //     ankle: 0,
        //     shin: 0,
        //     shoulder: 0,
        //     breast: 0,
        //     pelvis: 0
        // }],
        params: [],
        addParams: function (line){
            this.params.push({neck: line.neck, biceps: line.biceps})
        },
        test: props.test || 'Hello world',
        toggleTest: function (param) {
            this.test = param
        },

    };
};