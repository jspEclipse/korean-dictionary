import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const VocabCard = (props) => {
    return (
        <div className="relative group">
            <div className="absolute inset-0 -z-10 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:blur-lg"
                style={{
                    background: "linear-gradient(45deg, #E53341, #0058C6)",
                    filter: "blur(10px)",
                    margin: "-3px"
                }}
            ></div>

            <Card className="relative overflow-hidden bg-white border border-gray-300 dark:bg-gray-900 dark:border-gray-700">
                {/* Absolute div inside card (respects overflow-hidden) */}
                <div className="absolute flex flex-col rotate-45 right-[-20px] top-5">
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

                {/* Card Content */}
                <CardHeader>
                    <CardTitle>{props.vocab}</CardTitle>
                    <CardDescription className="line-clamp-2 h-[2.5rem]">{props.roman}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{props.eng}</p>
                </CardContent>
            </Card>
        </div>
    );
};

export default VocabCard;
