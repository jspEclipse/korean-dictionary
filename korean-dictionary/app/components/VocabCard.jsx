import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const VocabCard = (props) => {
    return(
        <Card className="relative overflow-hidden">
            <div className="absolute flex flex-col rotate-45 right-[-20] top-5">
                <div className="flex mb-1">
                    <div className="w-12 h-3 bg-black"></div>
                    <div className="w-2"></div>
                    <div className="w-12 h-3 bg-black"></div>
                </div>
                <div className="w-26 h-3 bg-black"></div>
                <div className="flex mt-1">
                    <div className="w-12 h-3 bg-black"></div>
                    <div className="w-2"></div>
                    <div className="w-12 h-3 bg-black"></div>
                </div>
            </div>
            <CardHeader>
                <CardTitle>{props.vocab}</CardTitle>
                <CardDescription>{props.roman}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{props.eng}</p>
            </CardContent>
        </Card>
    );
}

export default VocabCard