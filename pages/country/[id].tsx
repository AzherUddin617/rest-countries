import { useRouter } from 'next/router';
import {
    InferGetServerSidePropsType
} from 'next';
import Image from 'next/image';
import { Country as CountryType, fetchCountries, normalizeCountriesData } from '../../utils';

import { BsArrowLeft } from 'react-icons/bs';
import DetailText from '../../components/detailText';

import {
    useAppSelector,
} from '../../store/hooks';
import {
    selectCountries,
} from '../../store/countries/countriesSlice';

function Country({ country, countryId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const detailTexts = [
      {
        title: 'Native Name',
        text: country.nativeName,
      },
      {
        title: 'Top Level Domain',
        text: country.tld.join(', '),
      },
      {
        title: 'Population',
        text: country.population,
      },
      {
        title: 'Currencies',
        text: country.currencies.join(', '),
      },
      {
        title: 'Region',
        text: country.region,
      },
      {
        title: 'Languages',
        text: country.languages.join(', '),
      },
      {
        title: 'Subregion',
        text: country.subRegion,
      },
      {
        title: 'Capital',
        text: country.capital,
      },
  ];

  const router = useRouter();

  const handleBack = () => {
    router.back();
  }

  return (
    <div className='pt-4'>
        <div className="container">

            <button 
              onClick={handleBack}
              className="btn rounded-md shadow-md px-6 py-2 flex items-center mb-6 cursor-pointer"
            >
                <BsArrowLeft className='' />
                <span className='pl-2'>Back</span>
            </button>

            <div className="main flex justify-between items-center">

                <div className="left flex-[0_0_48%]">
                    <Image src={country.flag} alt='FLAG'
                        layout='responsive'
                        className="w-full h-40 object-cover"
                        width={200}
                        height={120}
                    />
                </div>
                <div className="right flex-[0_0_48%]">
                    <h2 className="title text-3xl font-bold pb-4">{country.name}</h2>

                    <div className="details flex flex-wrap justify-between">
                        {detailTexts.map((detailText, index) => (
                            <div key={index} className="detail flex-[0_0_50%]">
                                <DetailText {...detailText} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export const getServerSideProps = async (ctx: any) => {
    const id = ctx.query.id as string;
    const data = await fetchCountries();
    const countries = normalizeCountriesData(data);
    const country = countries[+id - 1] || countries.find(country => country.id === +id);

    return {
        props: {
            country: JSON.parse(JSON.stringify(country)) as CountryType,
            countryId: +id,
        }
    }
}

export default Country;