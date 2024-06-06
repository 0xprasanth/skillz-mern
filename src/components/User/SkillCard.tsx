
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SkillCard = ({ value }: { value: any }) => {
  return (
    <>
      <hr className="h-[2px] border-none bg-black" />
      <Card className=" w-full mb-5">
        <CardHeader>
          <CardTitle>{value.title}</CardTitle>
          <CardDescription>Skills gained in {value.title.toUpperCase()}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Score Gained: {value.score}%
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default SkillCard;
