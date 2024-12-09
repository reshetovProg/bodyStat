import axios from "axios";

export const createAppStore = (props) => {
    return {
        params: [],

        setParams(line){
            this.params = line;
        },

        addParams(line){
            if (Array.isArray(this.params))
                this.params.push(line)
        },

        async updateParams(){
            const response =  await axios.get("http://localhost:8080/api/v1/params");
            this.setParams(response.data);

        }
    };
};