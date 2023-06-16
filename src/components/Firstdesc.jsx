import React from "react";
import ThinkingEmoji from "../assets/images/thinking-emoji.png";
import HandEmoji from "../assets/images/hand-emoji.png";
import InstagramLogo from "../assets/images/instagram.png";

const Firstdesc = () => {
  return (
    <div className="px-20 xs:px-4 mt-16 md:mt-32 xs:mt-48">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <p className="font-helveticaBold text-xl xs:text-lg">VAD VI GÖR?</p>
          <img className="w-6 h-6" src={ThinkingEmoji} alt="" />
        </div>
        <div>
          Porslinsimperiet är ett företag som specialiserar sig på köp och sälj
          av retro porslin. Vi är kända för vår enkla kontakt och effektiva
          arbetsmetoder.{" "}
          <b>
            Vi köper delar av dödsbon som innehåller antika och retro föremål.
          </b>{" "}
          Detta gör att Porslinsimperiet har en stor och varierad samling av
          porslin och keramik från olika tidsperioder. <br />
          <br /> Porslinsimperiet hjälper också till med värdering vid
          bodelning. Vi har stor erfarenhet av att värdera porslin och andra
          antika föremål, vilket gör oss till en pålitlig partner vid bodelning.{" "}
          <br />
          <br /> För att nå ut till en bredare publik säljer Porslinsimperiet
          sina produkter både på Tradera och genom sociala medier. Genom att
          sälja på sociala medier kan vi nå ut till en större publik och bygga
          en lojal följarskara.
        </div>
      </div>
      <div className="mb-12">
        <div className="flex items-center gap-1 mb-3">
          <p className="font-helveticaBold text-xl xs:text-lg">DÖDSBO</p>
        </div>
        <div>
          Att ta hand om ett dödsbo kan vara en känslosam och överväldigande
          uppgift. Det kan vara svårt att veta var man ska börja och hur man ska
          hantera allt från möbler och kläder till värdefulla smycken och
          konstverk. <br />
          <br /> Vi på Porslinsimperiet förstår utmaningarna med att avveckla
          ett dödsbo och vi kan hjälpa till att göra processen enklare. Vi
          erbjuder tjänster som köp, värdering och försäljning av dödsbon,
          vilket kan vara en lättnad för familjemedlemmar och vänner som redan
          har mycket att hantera efter en förlust. <br />
          <br /> Vi har erfarenhet av att hantera olika typer av dödsbon och vi
          arbetar alltid med respekt och omsorg. Vi tar hand om allt från
          sortering och packning till försäljning och rådgivning. Vi kan även
          erbjuda värderingar för att hjälpa till att fastställa värdet på
          arvegods och andra föremål. <br />
          <br /> Vårt mål är att göra processen så smidig och enkel som möjligt
          för dig. Vi strävar efter att maximera värdet på föremålen i dödsboet
          genom att sälja dem till rätt pris till lämpliga köpare. Vi kan också
          hjälpa till att donera föremål till välgörenhet eller arrangera en
          auktion om det är önskvärt. <br />
          <br /> Om du behöver hjälp med att avveckla ett dödsbo, ring oss på
          073-0437921 eller maila på{" "}
          <span className="underline font-semibold">
            <a href="mailto:hej@porslinsimperiet.se">hej@porslinsimperiet.se</a>
          </span>{" "}
          för att få mer information om våra tjänster och hur vi kan hjälpa
          till. Vi är här för att underlätta en svår tid och hjälpa dig att ta
          hand om allt som behöver göras.
        </div>
      </div>
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <p className="font-helveticaBold text-xl xs:text-lg">
            VILKA ÄR VI OCH VART FINNS VI?
          </p>
          <img className="w-6 h-6" src={HandEmoji} alt="hand" />
        </div>
        <div>
          Vi är ett modernt företag med lång erfarenhet baserat i Göteborg och
          vår passion är antikt och retro porslin. Vi brinner för att upptäcka
          och samla på vackra och unika porslinsföremål från förr. Vår kärlek
          till antikviteter och retrodesign är vad som driver oss och vi strävar
          efter att erbjuda de mest intressanta och högkvalitativa produkterna
          till våra kunder. Oavsett om du är en samlare eller bara letar efter
          en speciell present, är vi övertygade om att du kommer att hitta något
          som du älskar i vår samling.
        </div>
      </div>
      <div className="flex items-center gap-3">
        <img className="w-[52px] xs:w-10" src={InstagramLogo} alt="instagram" />
        <p className="font-helveticaBold">FÖLJ OSS PÅ INSTAGRAM!</p>
      </div>
    </div>
  );
};

export default Firstdesc;
