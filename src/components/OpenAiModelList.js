import React, { useState, useEffect } from "react";
import "../css/chatgpt.css";
import { useSelector, useDispatch } from "react-redux";
import { setGptModel } from "../redux/actions/UserProfileActions";
//import { Configuration, OpenAIApi } from "openai";
const chatCompletionModels = ["gpt-4o","gpt-4o-mini","gpt-4"];

const OpenAIModelList = () => {
    const [models, setModels] = useState([]);
    const selectedGptModel = useSelector((state) => state.UserProfileReducer.selectedGptModel);
    const dispatch = useDispatch();

    useEffect(() => {
        setModels(chatCompletionModels);
    }, [])

    // const fetchOpenAIModels = async () => {
    //     const configuration = new Configuration({
    //         apiKey: OPENAI_API_KEY,
    //     });
    //     const openai = new OpenAIApi(configuration);
    //     try {
    //         const response = await openai.listModels();
    //         console.log("Response...", response);
    //         if (response.data && response.data.data) {
    //             let chatCompatibleModels = response.data.data.filter(model => 
    //                 chatCompletionModels.includes(model.id));
    //             setModels(chatCompatibleModels);
    //         } else {
    //             console.error("Failed to fetch models!")
    //         }
    //     } catch (error) {
    //         console.error("An error occurred while fetching model list:", error.response)
    //     }
    // }

    return (
        <div>
            <select 
                value={selectedGptModel} 
                onChange={(e)=> {
                    dispatch(setGptModel(e.target.value));
                    localStorage.setItem("gpt-model", e.target.value);
                }}>
                {
                    models.map((modelName, index)=> (
                        <option key={index} value={modelName}>{modelName}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default OpenAIModelList