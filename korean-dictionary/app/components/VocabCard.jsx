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
        <Card>
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