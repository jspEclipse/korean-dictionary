import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const FullCard = () => {
    return (
        <div className="fixed bottom-0 right-0 z-20 m-5 h-[25vh] w-[40vh]">
            <Card className="min-h-full">
                <CardHeader>
                    <CardTitle>Test</CardTitle>
                    <CardDescription>Test</CardDescription>
                </CardHeader>
                <CardContent>
                    <p >test</p>
                </CardContent>
            </Card>
        </div>
    );
}

export default FullCard;