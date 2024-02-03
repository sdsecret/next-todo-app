import { Card, CardHeader, CardBody, CardFooter, Typography, Button, } from '@/components/Material/material';

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-md py-10">
      <Card shadow={false}>
        <CardBody>
          {/* <Typography variant="h5" color="blue-gray" className="mb-2">
            UI/UX Review Check
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography> */}
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Add Todo</Button>
        </CardFooter>
      </Card>
    </div>

  );
}
