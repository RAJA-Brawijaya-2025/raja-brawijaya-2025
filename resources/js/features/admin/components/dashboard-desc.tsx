import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';

const DashboardDesc = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-2xl text-gr-05">Data Harian</CardTitle>
        <CardDescription className="text-black text-sm">
          RAJA Brawijaya
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col text-center mx-auto font-sora mt-8 mb-12">
          <img
            src="/assets/comingsoon/mahkota.png"
            alt="mahkota"
            className="mx-14"
          />
          <h1
            className="text-sm md:text-lg font-bold text-[#107D8F]"
            style={{
              textShadow: `
                                    1px 1px 0 #fff,
                                    -1px 1px 0 #fff,
                                    1px -1px 0 #fff,
                                    -1px -1px 0 #fff,
                                    3px 3px 6px rgba(0,0,0,0.4)
                                    `,
            }}
          >
            RAJA Brawijaya
          </h1>
          <h2
            className="font-bold text-[#13B2BE]"
            style={{
              textShadow: `
                                    1px 1px 0 #fff,
                                    -1px 1px 0 #fff,
                                    1px -1px 0 #fff,
                                    -1px -1px 0 #fff,
                                    3px 3px 6px rgba(0,0,0,0.4)
                                    `,
            }}
          >
            2025
          </h2>
        </div>
        <CardDescription className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et,
          dicta reiciendis dignissimos aliquid earum minus provident, sapiente
          assumenda adipisci dolorem? Repellat consequuntur nulla magnam
          veritatis, tempore harum suscipit neque.
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default DashboardDesc;
