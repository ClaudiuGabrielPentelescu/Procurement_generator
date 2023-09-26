import React, {useCallback} from "react";
import {useState} from "react";
import "./Redactare.css";
import {createWorker} from "tesseract.js";
import {useEffect} from "react";

function Redactare() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [textResult, setTextResult] = useState("");

  const worker = createWorker();

  const convertImageToText = useCallback(async () => {
    if (!selectedImage) return;
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {data} = await worker.recognize(selectedImage);
    setTextResult(data.text);
  }, [worker, selectedImage]);

  useEffect(() => {
    convertImageToText();
  }, [selectedImage, convertImageToText]);

  const handleChangeImage = (e) => {
    if (e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    } else {
      setSelectedImage(null);
      setTextResult("");
    }
  };
  const text = textResult;

  const regex = /IDROU(.*?)<<(.+?)<<</;
  const match = text.match(regex);
  const firstName = match ? match[2] : "";

  const regex1 = /([A-Z-]+)' Sl/;
  const match1 = text.match(regex1);
  const lastName = match ? match[1] : "";

  // const lastNameRegex = /Last name \/[^'\n]+ '([^']+)'/;
  // const lastNameMatch = lastNameRegex.exec(text);
  // const lastName = lastNameMatch ? lastNameMatch[1] : "";

  const cnpRegex = /([0-9]{13})/;
  const cnpMatch = text.match(cnpRegex);
  const cnp = cnpMatch ? cnpMatch[1] : "";

  const addressRegex = /Domiciliu\/Adresse\/Address = > ([^@]+)/;
  const addressMatch = text.match(addressRegex);
  const address = addressMatch ? addressMatch[1].trim() : "";

  const serieRegex = /SERIA (\w+)/;
  const serieMatch = text.match(serieRegex);
  const serieBuletin = serieMatch ? serieMatch[1] : "";

  const numarRegex = /xv(\d+)/i;
  const numarMatch = text.match(numarRegex);
  const numarBuletin = numarMatch ? numarMatch[1] : "";

  const spclepRegex = /(SPCLEP\s+[^0-9]+)/i;
  const spclepMatch = text.match(spclepRegex);
  const unitateaEmitenta = spclepMatch ? spclepMatch[1] : "";

  const dateRegex = /(\d{2}\.\d{2}\.\d{4})/g;
  const dateMatches = text.match(dateRegex);
  const dataValabilitate = dateMatches && dateMatches.length > 0 ? dateMatches[0] : "";

  console.log(lastName);
  console.log(firstName);
  console.log(cnp);
  console.log(address);
  console.log(serieBuletin);
  console.log(numarBuletin);
  console.log(dataValabilitate);
  console.log(unitateaEmitenta);

  return (
    <div className="redactare">
      <h2 className="header-redactare">Redactare</h2>
      <p className="descriere-redactare">Încarcă datele</p>
      <div className="buton-redactare">
        <label htmlFor="upload">Încarcă act</label>
        <input type="file" id="upload" accept="image/*" onChange={handleChangeImage} />
      </div>
      <div className="rezultat">
        {selectedImage && (
          <div className="box-image">
            <img src={URL.createObjectURL(selectedImage)} alt="thumb" />
          </div>
        )}
        {textResult && (
          <div className="box-p">
            <p>{textResult}</p>
          </div>
        )}
      </div>
      <div className="box_procura">
        <h1 className="titlu_procura">Procură de înmatriculare</h1>
        <p>
          Subsemnatul, {lastName} {firstName}, CNP {cnp}, domiciliat în {address}, identificat prin
          C.I seria-
          {serieBuletin}, nr.{numarBuletin} valabilă până la data de {dataValabilitate}-
          {unitateaEmitenta},dau mandat domnului, {lastName} {firstName}, CNP {cnp}, domiciliat în
          {address}, identificat prin C.I seria-{serieBuletin} nr.{numarBuletin} valabilă până la
          data de {dataValabilitate}-{unitateaEmitenta}, ca în numele meu şi pentru mine să obţină
          numerele de înmatriculare provizorii şi definitive și sã înmatriculeze definitiv pe numele
          subsemnatului AUTOTURISMUL, marca ________, tipul ______, având numărul de identificare
          _______________, an fabricaţie ______, de culoare _______ dobândit prin
          cumpărare.---------------------------------------------------------------
        </p>
        <p>
          Pentru ducerea la îndeplinire a prezentului mandat, care este gratuit şi valabil pânã la
          executare, mandatarul meu va face cererile şi declaraţiile necesare, va achita toate
          taxele necesare, va ridica numerele de înmatriculare provizorii cât şi cele definitive,
          certificatul de înmatriculare, va depune documente la dosar şi va ridica documente de la
          dosar, inclusiv cele doveditoare înmatriculării, va semna valabil în numele meu si pentru
          mine oriunde va fi nevoie, semnătura sa fiindu-mi
          opozabilă.---------------------------------------------------------------------------------------------------
        </p>
        <p>
          Prezentul mandat este cu titlu gratuit şi valabil până la îndeplinirea scopului pentru
          care a fost dat, subsemnatul mandant având cunoştinţă de dispoziţiile art.2015 din Noul
          Cod Civil, care prevăd că, dacă părţile nu au precizat un termen, mandatul încetează în 3
          ani de la încheierea lui. Subsemnatul mandant am cunoştinţă de faptul că mandatul se
          stinge conform art.2030 din Noul Cod Civil, prin oricare dintre următoarele moduri:
          revocarea sa de către mandant, renunţarea mandatarului, moartea, incapacitatea sau
          falimentul mandantului ori mandatarului.---
        </p>
        <p>
          Eu, mandantul, declar că, în conformitate cu cerințele Regulamentului (UE) 2016/679 al
          Parlamentului European și al Consiliului din 27 aprilie 2016 privind protecția persoanelor
          fizice în ceea ce privește prelucrarea datelor cu caracter personal și privind libera
          circulație că sunt de acord cu prelucrarea datelor mele personale și totodată declar că
          mandatarul meu și-a exprimat acordul cu privire la prelucrarea datelor personale, în
          legătură cu perfectarea prezentului act.--------------
        </p>
        <p>
          Consimt la autentificarea prezentului act, pe care l-am citit, i-am înţeles conţinutul şi
          consecinţele juridice, cele cuprinse în act reprezintă voinţa mea şi semnez în faţa şi la
          sediul notarului public unicul exemplar original al acestuia.----------------------------
        </p>
        <p>
          Tehnoredactat şi autentificat la Biroul Individual Notarial _______________-_____, într-un
          exemplar original, semnat de parte care rămâne în arhiva biroului
          notarial.------------------------------------------------------------------------------------------------------
        </p>
      </div>
    </div>
  );
}
export default Redactare;
