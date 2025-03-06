import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

/*
 * VocabCard
 * handles displaying the information on the card from data.js
 */
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
                {/* Used HTML and CSS to decorate each card with the top right stripes on the korean flag */}
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
                    <CardDescription>{props.roman}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="line-clamp-1">{props.eng}</p>
                </CardContent>
            </Card>
        </div>
    );
};

export default VocabCard;
