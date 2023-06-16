import React from "react";
import Desc2 from "../assets/images/desc2.png";
import TraderaLogo from "../assets/images/tradera.png";

const SecondDesc = () => {
  return (
    <div className="px-20 xs:px-4 mt-12  bg-[#E9F0E6]">
      <div>
        <img className="w-full" src={Desc2} alt="" />
      </div>
      <div className="mt-16">
        <div className="mb-10">
          <p>
            Vi är passionerade om retro porslin och har ett stort urval av olika
            stilar och formgivare. Vårt sortiment inkluderar allt från svenska
            klassiker som Rörstrand och Gustavsberg till dansk design från Royal
            Copenhagen och Bing & Grøndahl. Oavsett om du letar efter enstaka
            muggar eller en hel servis, har vi något som passar din smak och
            stil. <br />
            <br />
            Vår nordiska retrodesignkollektion har något för alla som uppskattar
            vintagestil. Vårt urval sträcker sig från 1950-talet till 1980-talet
            och inkluderar allt från möbler och belysning till dekorativa
            föremål och textilier. Våra varor är handplockade för att
            säkerställa hög kvalitet och autentiskt utseende. <br />
            <br /> För dig som samlar på modellbilar, har vi ett brett utbud av
            olika modeller och märken. Vårt sortiment inkluderar både moderna
            och klassiska bilar i olika skala och utförande. Vi är stolta över
            att erbjuda modellbilar av hög kvalitet och autentiskt utseende.{" "}
            <br />
            <br /> Oavsett om du letar efter ett särskilt föremål för din
            samling, eller om du helt enkelt vill ge ditt hem en unik touch, är
            vi säkra på att du kommer att hitta något som passar dig.
          </p>
        </div>
        <div className="mb-10">
          <p className="font-helveticaBold text-xl mb-1 xs:text-lg">PORSLIN</p>
          <p>
            Vi har ett stort urval av porslin från de mest kända märkena såsom
            Rörstrand, Gustavsberg, Arabia och Gefle. Många av våra produkter är
            formgivna av Marianne Westman, Stig Lindberg, Gunnar Nylund,
            Carl-Harry Stålhane, Berit Ternell, Margareta Hennix med flera. Vårt
            sortiment sträcker sig från klassiska och tidlösa serviser till
            unika och sällsynta föremål som är svåra att hitta någon annanstans.{" "}
            <br />
            <br />
            <span className="underline font-helveticaBold">
              Kontakta oss
            </span>{" "}
            idag för mer information om vårt sortiment av nordiskt retro
            porslin, eller om du vill sälja ditt eget porslin. Vi ser fram emot
            att höra från dig och hjälpa dig att hitta det perfekta föremålet
            för ditt hem eller din samling.
          </p>
        </div>
        <div className="mb-10">
          <p className="font-helveticaBold text-xl mb-1 xs:text-lg">RETRO</p>
          <p>
            Vi har ett stort urval av Lisa Larsons keramik, med sina söta och
            charmiga djurfigurer som har blivit en symbol för svensk design.
            Vårt sortiment inkluderar både klassiska och sällsynta Lisa
            Larson-föremål, från hennes tidiga verk till senare produktioner.
            Oavsett om du letar efter en särskild figur eller en hel samling,
            har vi något som passar din stil och budget. <br />
            <br /> Vårt utbud av retrofigurer, tavlor, inredning och möbler är
            också något att utforska. Vi erbjuder en mängd olika stilar och
            design från retroperioder, allt från den populära Mid-Century Modern
            till romantisk Art Nouveau. Våra föremål är handplockade för att
            garantera hög kvalitet och autenticitet. <br />
            <br /> Om du har några retroartiklar som du vill sälja, är vi alltid
            intresserade av att se dem. Vi köper retroföremål av hög kvalitet
            och arbetar alltid med respekt och omsorg. Vi strävar alltid efter
            att erbjuda våra kunder ett rättvist pris för deras föremål.
          </p>
        </div>
        <div className="mb-8">
          <p className="font-helveticaBold text-xl mb-1 xs:text-lg">
            MODELLBILAR
          </p>
          <p>
            Vi har ett stort urval av modellbilar i olika storlekar och stilar.
            Vårt sortiment inkluderar både nya och begagnade modeller, från
            välkända bilmärken som Porsche och Ferrari till sällsynta
            vintage-modeller. Oavsett om du letar efter en särskild modell eller
            en hel samling, har vi något som passar din stil och budget. <br />
            <br /> Våra modellbilar är noga utvalda för att garantera hög
            kvalitet och autenticitet. Vi arbetar med högkvalitativa märken och
            modeller, vilket garanterar att varje modell fungerar perfekt och
            ser fantastisk ut. Vi strävar alltid efter att erbjuda våra kunder
            de bästa modellbilarna till ett konkurrenskraftigt pris. Några
            märken som vi gärna handlar med är Schuco, Corgi Toys, Dinky Toys,
            Revell, Minichamps. Vi köper alltid in Saab & Volvomodeller. <br />
            <br /> Om du har några modellbilar som du vill sälja, är vi alltid
            intresserade av att se dem. Vi köper modellbilar av hög kvalitet och
            arbetar alltid med respekt och omsorg. Vi strävar alltid efter att
            erbjuda våra kunder ett rättvist pris för deras föremål.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img className="w-[52px] xs:w-10" src={TraderaLogo} alt="instagram" />
          <p className="font-helveticaBold">FÖLJ OSS PÅ TRADERA!</p>
        </div>
      </div>
    </div>
  );
};

export default SecondDesc;
