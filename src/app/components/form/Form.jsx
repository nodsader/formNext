import home from "@/datas/home.json"
import ProcessButton from "@/components/ProcessButton";

export default function Form() {

    const {index} = home
    return(
        <>
            <div className={"w-full"}>
                <div>
                    <ProcessButton/>
                    <span>{index.subtitle}</span>
                </div>
            </div>
        </>
    )
}