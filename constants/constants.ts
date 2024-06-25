export const LANGUAGES: { value: string; label: string }[] = [
  { value: "en", label: "English" },
];

export const HEADERNAVITEMS = [
  { path: "/roadmap", label: "roadmap" },
  {
    path: "https://planetix.gitbook.io/whitepaper/",
    label: "whitepaper",
  },
  { path: "https://planetix.com/", label: "planet-ix" },
];

export const FOOTERLINKS = [
  { title: "footer.links.home", path: "/", disabled: false },
  { title: "footer.links.dashboard", path: "/1", disabled: true },
  { title: "footer.links.roadmap", path: "/roadmap", disabled: false },
  { title: "footer.links.initiatives", path: "/2", disabled: true },
  { title: "footer.links.vision", path: "/3", disabled: true },
  {
    title: "footer.links.status",
    path: "https://planetix.statuspage.io/",
    disabled: false,
  },
];
export const FOOTERBTNLINKS = [
  {
    title: "footer.links.buy-token.title",
    subTitle: "footer.links.buy-token.subTitle",
    path: "/",
  },
  {
    title: "footer.links.subscribe-for-alerts.title",
    subTitle: "footer.links.subscribe-for-alerts.subTitle",
    path: "/",
  },
];

export const ROADMAPITEMS: {
  title: string;
  subTitle: string;
  date: string;
  complete: boolean;
}[] = [
  {
    title: "roadmap.card.q4-2021.title",
    subTitle: "roadmap.card.q4-2021.subtitle",
    date: "4 2021",
    complete: true,
  },
  {
    title: "roadmap.card.q1-2022.title",
    subTitle: "roadmap.card.q1-2022.subtitle",
    date: "1 2022",
    complete: false,
  },
  {
    title: "roadmap.card.q2-2022.title",
    subTitle: "roadmap.card.q2-2022.subtitle",
    date: "2 2022",
    complete: false,
  },
  {
    title: "roadmap.card.q3-2022.title",
    subTitle: "roadmap.card.q3-2022.subtitle",
    date: "3 2022",
    complete: false,
  },
  {
    title: "roadmap.card.q4-2022.title",
    subTitle: "roadmap.card.q4-2022.subtitle",
    date: "4 2022",
    complete: false,
  },
];
