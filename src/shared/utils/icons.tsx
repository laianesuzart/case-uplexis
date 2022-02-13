import {
  FaBriefcase,
  FaTree,
  FaGavel,
  FaGlobeAmericas,
  FaPiggyBank,
} from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { ImBlocked } from "react-icons/im";
import { GiCutDiamond, GiPerson } from "react-icons/gi";

export const icons: { [key: string]: JSX.Element } = {
  Profissional: <FaBriefcase />,
  Reguladores: <MdAccountBalance />,
  "Sócio Ambiental": <FaTree />,
  Jurídico: <FaGavel />,
  "Listas Restritivas": <ImBlocked />,
  "Mídia / Internet": <FaGlobeAmericas />,
  "Bens e Imóveis": <GiCutDiamond />,
  Cadastro: <GiPerson />,
  Financeiro: <FaPiggyBank />,
};
