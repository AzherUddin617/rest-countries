import Link from "next/link";

import { Country as CountryType } from "../utils"
import Image from "next/image";
import DetailText from "./detailText";

function CountryCard({ country }: { country: CountryType }) {

  const detailTexts = [
    {
      title: "Population",
      text: country.population,
    },
    {
      title: "Region",
      text: country.region,
    },
    {
      title: "Capital",
      text: country.capital,
    }
  ]

  return (
    <Link href="/country/[id]" as={`/country/${country.id}`}>
      <div
        className="card bg-primary dark:bg-primary-dark flex-[0_0_100%] md:flex-[0_0_23%] sm:flex-[0_0_32%] mb-6 rounded-md overflow-hidden shadow-sm cursor-pointer transition-shadow hover:shadow-md"
      >

          <Image src={country.flag} alt='FLAG' 
            layout='responsive' 
            className="w-full h-40 object-cover"
            width={200}
            height={120}
          />

          <div className="card-body py-4 px-4">
              <h5 className="card-title text-xl font-semibold pb-2">{country.name}</h5>

              {detailTexts.map((detailText, index) => (
                  <DetailText key={index} {...detailText} />
              ))}
          </div>
          
      </div>
    </Link>
  )
}

export default CountryCard