interface SocialSchema {
  name:
    | 'Twitter'
    | 'Telegram'
    | 'Telegram Announcements'
    | 'Medium'
    | 'Reddit'
    | 'Youtube'
    | 'Facebook';
  /**
   * @format url
   */
  url: string;
  handle?: string;
  search_strings?: string[];
}

interface TokenSchema {
  sections: Section[];
}

interface RoadmapSchema {
  description: string;
  image?: string;
  link?: string;
  day?: number;
  quarter?: string;
  month?: number;
  title: string;
  year: number;
}

interface Section {
  type: string;
  content?: string;
  charts?: Chart[];
}

interface Chart {
  dropdownLabel?: string;
  popoverUnit: string;
  valueUnit: string;
  labelsAndValues: LabelsAndValues[];
}

interface LabelsAndValues {
  label: string;
  value: number;
  popoverValue: number;
}

interface LinkSchema {
  label: string;
  /**
   * @format url
   */
  url: string;
}

interface TokenomicsSchema {
  max_supply?: number;
  total_supply?: number;
  circulating_supply?: number;
  isInflationary?: boolean;
}

interface TradingPair {
  base: string;
  quote: string;
  pair_id: string;
  exchange_id: string;
}

interface Erc20Schema {
  tokenAddress: string;
  nonCirculatingWallets: string[];
}

interface FavoriteTweetSchema {
  tweetUrl: string;
}

interface LaunchTokenInfoElement {
  type: string;
  value: number;
  label: string;
}

interface ChartsSectionElement {
  title: string;
  description: string;
  type: string;
  charts: Chart[];
}

interface VideosSectionElement {
  title: string;
  description: string;
  video: string;
}

export default interface ProjectSchema {
  name: string;
  symbol: string;
  additionalSymbols?: string[];
  coingecko_id?: string;
  erc20?: Erc20Schema;
  isStableCoin?: boolean;
  isUpcomingProject?: boolean;
  launchTokenInfos?: LaunchTokenInfoElement[];
  socialShareInfos?: string[];
  chartsSection?: ChartsSectionElement[];
  videosSection?: VideosSectionElement[];
  /**
   * @format url
   */
  website: string;
  /**
   * @format url
   */
  source_code?: string;
  /**
   * @format url
   */
  white_paper?: string;
  /**
   * @minItems 1
   */
  socials: SocialSchema[];
  favoriteTweets?: FavoriteTweetSchema[];
  additionalLinks?: LinkSchema[];
  /**
   * Roadmap is a premium feature
   */
  roadmap?: RoadmapSchema[];
  tokenomics: TokenomicsSchema;
  tokenomics_url?: string;
  trading_pairs?: TradingPair[];
  token?: TokenSchema;
}
