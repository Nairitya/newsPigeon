import React, { Component } from "react";
import Newsitem from "./Newsitem";
import LoadingSpinner from "./LoadingSpinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

class News extends Component {
    articles = [
        {
            source: { id: "reuters", name: "Reuters" },
            author: null,
            title:
                "Democrats seal control of U.S. Senate with win in Nevada - Reuters",
            description:
                "Democrats will hold onto control of the U.S. Senate after Senator Catherine Cortez Masto won re-election in Nevada, Edison Research projected on Saturday, handing a major victory to President Joe Biden.",
            url: "https://www.reuters.com/world/us/democrats-await-nevada-election-result-that-could-seal-their-us-senate-majority-2022-11-12/",
            urlToImage:
                "https://www.reuters.com/resizer/Rl4CNMooTusexyptTpfD-dUEoig=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/I5KLRYM3NNLFPAXYZWTDTCQDSQ.jpg",
            publishedAt: "2022-11-13T09:07:00Z",
            content:
                "PHOENIX, Nov 12 (Reuters) - Democrats will hold onto control of the U.S. Senate after Senator Catherine Cortez Masto won re-election in Nevada, Edison Research projected on Saturday, handing a major … [+5467 chars]",
        },
        {
            source: { id: null, name: "TMZ" },
            author: "TMZ Staff",
            title: "Aaron Carter Died Without a Will - TMZ",
            description:
                "Aaron Carter passed away without a will in place ... and under California law, that means all his property will pass to his baby boy.",
            url: "https://www.tmz.com/2022/11/13/aaron-carter-died-dead-without-will-son-inherit-assets-prince/",
            urlToImage:
                "https://imagez.tmz.com/image/a2/16by9/2022/11/10/a2be2b07761d47bc82e25ccf42d3f896_xl.jpg",
            publishedAt: "2022-11-13T09:00:00Z",
            content:
                "Aaron Carter died without a will ... so now the State of California will decide who inherits his estate.\r\nFamily sources tell TMZ ... Aaron was advised by his attorney to make a will, especially beca… [+1087 chars]",
        },
        {
            source: { id: null, name: "CoinDesk" },
            author: "Shaurya Malwa",
            title:
                "Binance, Huobi Block FTT Deposits After $400M Worth of Tokens Illicitly Released - CoinDesk",
            description:
                "The tokens were illicitly released from FTT’s main deployer address.",
            url: "https://www.coindesk.com/business/2022/11/13/binance-huobi-block-ftt-deposits-after-420m-worth-of-tokens-illicitly-released/",
            urlToImage:
                "https://www.coindesk.com/resizer/lpWo6Usef4y1G3ebyITfIULzi_I=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/T4G3XGKR7JGN7I3U55NPNTDZ4Q.jpg",
            publishedAt: "2022-11-13T08:34:21Z",
            content:
                "Please note that ourprivacy policy,terms of use,cookies, anddo not sell my personal informationhas been updated.\r\nThe leader in news and information on cryptocurrency, digital assets and the future o… [+538 chars]",
        },
        {
            source: { id: "google-news", name: "Google News" },
            author: null,
            title:
                "How Alex Pereira Upset Israel Adesanya at U.F.C. 281 - The New York Times",
            description: null,
            url: "https://news.google.com/__i/rss/rd/articles/CBMiPmh0dHBzOi8vd3d3Lm55dGltZXMuY29tL2xpdmUvMjAyMi8xMS8xMi9zcG9ydHMvdWZjLTI4MS1yZXN1bHRz0gEA?oc=5",
            urlToImage: null,
            publishedAt: "2022-11-13T08:29:57Z",
            content: null,
        },
        {
            source: { id: null, name: "BBC News" },
            author: "https://www.facebook.com/bbcnews",
            title:
                "Dallas air show crash: Two World War Two planes collide in mid-air - BBC",
            description:
                "Footage shows the two planes colliding at a commemorative air show near Dallas, killing at least two.",
            url: "https://www.bbc.com/news/world-us-canada-63612409",
            urlToImage:
                "https://ichef.bbci.co.uk/news/1024/branded_news/9F4D/production/_127618704_mediaitem127618703.jpg",
            publishedAt: "2022-11-13T07:25:01Z",
            content:
                "Media caption, Watch: Two vintage World World II planes collide in mid-air during Dallas air show\r\nTwo vintage World War Two-era planes have collided and crashed at an air show in the US state of Tex… [+2326 chars]",
        },
        {
            source: { id: null, name: "NDTV News" },
            author: null,
            title:
                "Exiled Iranian Who Inspired Steven Spielberg's 'The Terminal' Dies At Paris Airport - NDTV",
            description:
                "Mehran Karimi Nasseri, the Iranian exile whose time spent at Paris' Charles de Gaulle airport inspired filmmaker Steven Spielberg's movie 'The Terminal', on Saturday, died of a heart attack in Terminal 2F of the same airport, reported Variety.",
            url: "https://www.ndtv.com/world-news/exiled-iranian-who-inspired-steven-spielbergs-the-terminal-dies-at-us-airport-3515434",
            urlToImage:
                "https://c.ndtvimg.com/2022-11/p1ijj0mo_mehran-karimi-nasseri_625x300_13_November_22.jpg",
            publishedAt: "2022-11-13T06:23:00Z",
            content:
                "It was in 1988 that Mehran first settled at the airport. (File)\r\nMehran Karimi Nasseri, the Iranian exile whose time spent at Paris' Charles de Gaulle airport inspired filmmaker Steven Spielberg's mo… [+1909 chars]",
        },
        {
            source: { id: "cnn", name: "CNN" },
            author: "Scottie Andrew",
            title:
                "Dave Chappelle talks Kanye, antisemitism and Trump in 'SNL' monologue - CNN",
            description:
                "The stand-up comic mostly focused on Kanye West in a lengthy monologue and alluded to the controversy surrounding explicit jokes he made about transgender people.",
            url: "https://www.cnn.com/2022/11/13/entertainment/dave-chappelle-snl-monologue-kanye-cec/index.html",
            urlToImage:
                "https://media.cnn.com/api/v1/images/stellar/prod/221112234953-02-snl-dave-chappelle-host.jpg?c=16x9&q=w_800,c_fill",
            publishedAt: "2022-11-13T06:18:00Z",
            content:
                "Dave Chappelle addressed several contentious topics in his latest Saturday Night Live monologue, focusing mostly on Kanye Wests recent antisemitic comments. \r\nIn a lengthy stand-up set, Chappelle nam… [+2341 chars]",
        },
        {
            source: { id: "cnn", name: "CNN" },
            author: "Betsy Klein, Phil Mattingly, Kevin Liptak",
            title:
                "Biden to meet with top US allies Japan and South Korea following midterm boost - CNN",
            description:
                "President Joe Biden landed in Cambodia on Saturday still reveling in midterm election results that have produced an unexpected boost at home for his second two years in office.",
            url: "https://www.cnn.com/2022/11/12/politics/joe-biden-cambodia-day-two/index.html",
            urlToImage:
                "https://media.cnn.com/api/v1/images/stellar/prod/221113042759-01-biden-cambodia-111322.jpg?c=16x9&q=w_800,c_fill",
            publishedAt: "2022-11-13T05:26:48Z",
            content:
                "Phnom Penh, CambodiaCNN\r\n  — \r\nPresident Joe Biden landed in Cambodia on Saturday still reveling in midterm election results that have produced an unexpected boost at home for his second two years in… [+5903 chars]",
        },
        {
            source: { id: null, name: "SciTechDaily" },
            author: null,
            title:
                "Warning: Popular Vitamin Supplement Causes Cancer Risk and Brain Metastasis - SciTechDaily",
            description:
                "University of Missouri researchers made the discovery while using bioluminescent imaging technology to study how nicotinamide riboside supplements work inside the body. Commercial dietary supplements like nicotinamide riboside (NR), a form of vitamin B3, were…",
            url: "https://scitechdaily.com/warning-popular-vitamin-supplement-causes-cancer-risk-and-brain-metastasis/",
            urlToImage:
                "https://scitechdaily.com/images/Vitamin-Supplement-Bottle.jpg",
            publishedAt: "2022-11-13T05:12:17Z",
            content:
                "University of Missouri researchers made the discovery while using bioluminescent imaging technology to study how nicotinamide riboside supplements work inside the body.Commercial dietary supplements … [+4802 chars]",
        },
        {
            source: { id: null, name: "HuffPost" },
            author: "Mary Papenfuss",
            title:
                "NASA Scientists Present Theory About Why We Haven't Met Other Intelligent Life. It's Crushing. - Yahoo News",
            description: "E.T., phone Earth ... if you can.",
            url: "https://www.huffpost.com/entry/great-filter-theory-intelligent-life-extinction-nasa_n_636fee4ce4b0ca9acf253784",
            urlToImage:
                "https://img.huffingtonpost.com/asset/636fefc21f00003300cfbc80.jpeg?cache=0amUlJcQjV&ops=1200_630",
            publishedAt: "2022-11-13T05:07:11Z",
            content:
                "NASA scientists have explained in a new paper why they believe its likely we havent ever encountered intelligent extraterrestrial life and its heartbreaking.\r\nAll intelligent life, they argue, has li… [+1944 chars]",
        },
        {
            source: { id: null, name: "Field Gulls" },
            author: "Mookie Alexander",
            title:
                "Seahawks and Buccaneers: How to watch, live stream, odds, more - Field Gulls",
            description:
                "For the first time ever, the NFL is holding a regular season game in Germany. A packed Allianz Arena in Munich will serve as host to a key Week 10 matchup between the NFC West leading Seattle...",
            url: "https://www.fieldgulls.com/2022/11/12/23447773/seahawks-vs-buccaneers-tv-channel-live-stream-how-to-watch-online-start-time-odds",
            urlToImage:
                "https://cdn.vox-cdn.com/thumbor/SD3NyBOafpZvygP9STQTKTrBnAE=/0x0:8001x4189/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24191843/usa_today_19415952.jpg",
            publishedAt: "2022-11-13T05:00:00Z",
            content:
                "For the first time ever, the NFL is holding a regular season game in Germany.\r\nA packed Allianz Arena in Munich will serve as host to a key Week 10 matchup between the NFC West leading Seattle Seahaw… [+2964 chars]",
        },
        {
            source: { id: "axios", name: "Axios" },
            author: "Ina Fried",
            title:
                "Elon Musk culls Twitter contractors after mass employee layoffs - Axios",
            description:
                "Many workers received no official notification from the company.",
            url: "https://www.axios.com/2022/11/13/elon-musk-twitter-contractor-layoffs",
            urlToImage:
                "https://images.axios.com/Yl9giRUdkSkqkKI5p7dU65M_aB8=/0x0:1920x1080/1366x768/2022/11/13/1668308206239.jpg",
            publishedAt: "2022-11-13T04:44:48Z",
            content:
                "After laying off half its staff earlier this month, Twitter on Saturday started culling its vast ranks of contract staff, sources confirmed to Axios.\r\nWhy it matters: Like many companies, Twitter's s… [+2884 chars]",
        },
        {
            source: { id: "the-washington-post", name: "The Washington Post" },
            author: "Yvonne Wingett Sanchez, Reis Thebault",
            title:
                "Why it is taking so long for Arizona to count votes - The Washington Post",
            description:
                '"This is very, very common,” a Maricopa County leader said. “I know people are very anxious to get the results but there is nothing out of the ordinary here.”',
            url: "https://www.washingtonpost.com/politics/2022/11/12/arizona-election-vote-count-maricopa-county/",
            urlToImage:
                "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MUCRL5RBCNAU5OYF23ZVCEHRDI.jpg&w=1440",
            publishedAt: "2022-11-13T04:36:00Z",
            content:
                "Comment on this story\r\nPHOENIX In Arizona, there is no Election Day.\r\nLocals know it as Election Month, a weeks-long political extravaganza that begins in October and extends through the middle of No… [+12154 chars]",
        },
        {
            source: { id: null, name: "Nintendo Life" },
            author: "Liam Doolan",
            title:
                'Sonic Team Listening To Frontiers Feedback, Wants To Take Series To "Greater Heights" - Nintendo Life',
            description: "The game's director is excited about the future",
            url: "https://www.nintendolife.com/news/2022/11/sonic-team-listening-to-frontiers-feedback-wants-to-take-series-to-greater-heights",
            urlToImage: "https://images.nintendolife.com/55e9b0ae31435/1280x720.jpg",
            publishedAt: "2022-11-13T04:15:00Z",
            content:
                'Image: SEGA\r\nSega\'s latest release Sonic Frontiers takes the Sonic the Hedgehog series in a bold new direction with its "open-zone" gameplay. Obviously, Sega took a lot of feedback from focus groups … [+1099 chars]',
        },
        {
            source: { id: null, name: "OregonLive" },
            author: "James Crepea | The Oregonian/OregonLive",
            title:
                "What Dan Lanning said after Oregon Ducks lost to Washington - OregonLive",
            description:
                "Follow live updates from Lanning's postgame press conference",
            url: "https://www.oregonlive.com/ducks/2022/11/live-updates-dan-lanning-postgame-press-conference-after-oregon-ducks-lose-to-washington.html",
            urlToImage:
                "https://www.oregonlive.com/resizer/Qqkkt1MREPAz_AMSpu_RYoAvVzs=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/CZHOY3JBVJE2HGNHLRJI76DKO4.jpg",
            publishedAt: "2022-11-13T04:04:00Z",
            content:
                "No. 6 Oregon was defeated by Washington 37-34 Saturday at Autzen Stadium.\r\nDan Lanning recapped the Ducks second loss of the season.\r\nBelow is transcript from Lannings postgame press conference.\r\nDAN… [+4507 chars]",
        },
        {
            source: { id: "politico", name: "Politico" },
            author: null,
            title:
                "Control of the House remains on a knife's edge. Here's how it could break. - POLITICO",
            description:
                "There are 10 seats still in doubt. And both parties have a shot.",
            url: "https://www.politico.com/news/2022/11/12/house-midterm-elections-00066615",
            urlToImage:
                "https://static.politico.com/be/4d/9a7f4aca4945a5c96f9d4f5c9a46/59-az-ballot-processing-db.jpg",
            publishedAt: "2022-11-13T03:55:53Z",
            content:
                "Democrats have been narrowing the gap in many of those races over the past 24 hours. The Associated Press called seven new congressional races on Friday and three on Saturday all for Democrats. That … [+3785 chars]",
        },
        {
            source: { id: null, name: "YouTube" },
            author: null,
            title:
                "FTX saga continues: Funds vanish at bankrupt Crypto exchange, company confirms 'unauthorised access' - WION",
            description:
                "Bankrupt Crypto trading fund FTX confirmed that there was an 'unauthorised access' to its accounts. Moments later, the embattled company's CEO announced that...",
            url: "https://www.youtube.com/watch?v=orJdOzv9cxU",
            urlToImage: "https://i.ytimg.com/vi/orJdOzv9cxU/maxresdefault.jpg",
            publishedAt: "2022-11-13T03:44:46Z",
            content: null,
        },
        {
            source: { id: null, name: "YouTube" },
            author: null,
            title:
                "Rep. Karen Bass widens lead over Rick Caruso in race for Mayor of LA - CBS Los Angeles",
            description:
                "The latest numbers released by the Los Angeles County Registrar-Recorder/County Clerk on Saturday shows Bass with a lead of 9,463 votes over her opponent, Mr...",
            url: "https://www.youtube.com/watch?v=8PrlAQNeOcA",
            urlToImage: "https://i.ytimg.com/vi/8PrlAQNeOcA/maxresdefault.jpg",
            publishedAt: "2022-11-13T03:10:48Z",
            content: null,
        },
        {
            source: { id: null, name: "OregonLive" },
            author: "The Associated Press",
            title:
                "Democrat Gluesenkamp Perez flips Washington’s 3rd District - OregonLive",
            description:
                "Marie Gluesenkamp Perez defeated Donald Trump-backed Republican Joe Kent to prevail in the 3rd Congressional District in southwest Washington.",
            url: "https://www.oregonlive.com/politics/2022/11/democrat-gluesenkamp-perez-flips-washingtons-3rd-district.html",
            urlToImage:
                "https://www.oregonlive.com/resizer/f58zXgNa7vibp5mrsUH03PepYRk=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/LBLRUE533BFTRDVDBADHSCY4IA.jpg",
            publishedAt: "2022-11-13T02:14:00Z",
            content:
                "Democrat Marie Gluesenkamp Perez has been elected to the U.S. House from southwestern Washington, capturing a district that has long eluded her party.\r\nShe defeated Donald Trump-backed Republican Joe… [+1100 chars]",
        },
        {
            source: { id: "bloomberg", name: "Bloomberg" },
            author: null,
            title:
                "China Plans Sweeping Rescue Policies to Avert Property Crisis - Bloomberg",
            description: null,
            url: "https://www.bloomberg.com/tosv2.html?vid=&uuid=bcfac201-62fe-11ed-a9ec-544b46497768&url=L25ld3MvYXJ0aWNsZXMvMjAyMi0xMS0xMy9jaGluYS1wbGFucy1zd2VlcGluZy1yZXNjdWUtcG9saWNpZXMtdG8tYXZlcnQtcHJvcGVydHktY3Jpc2lz",
            urlToImage: null,
            publishedAt: "2022-11-13T02:04:00Z",
            content:
                "To continue, please click the box below to let us know you're not a robot.",
        },
    ];
    static defaultProps = {
        headlineType: "everything",
        category: "general",
    };
    static propTypes = {
        headlineType: PropTypes.string,
    };
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            currentPage: 0,
            loading: true,
            totalArticles: 0,

        };
        document.title = `${this.capitalizedCategory} News Headlines - NewsPigeon`;
    }
    capitalizedCategory =
        this.props.category[0].toUpperCase() + this.props.category.slice(1);

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/${this.props.headlineType}?country=${this.props.country}&category=${this.props.category}&apiKey=6a86b2653dfa4e14bd82abceec73e53f&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({ loading: false });
        // this.setState({
        //     articles: parsedData.articles,
        //     totalArticles: parsedData.totalResults,
        // });
        this.props.setProgress(10);
        this.props.setProgress(30);
        this.props.setProgress(60);
        this.fetchMoreData();
        this.props.setProgress(100);

    }

    fetchMoreData = async () => {

        this.setState({ currentPage: this.state.currentPage + 1 });
        let url = `https://newsapi.org/v2/${this.props.headlineType}?country=${this.props.country
            }&category=${this.props.category
            }&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize
            }&page=${this.state.currentPage + 1}`;
        let data = await fetch(url);

        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalArticles: parsedData.totalResults,
            loading: false,
        });
    };
    // loadNews = async () => {
    //     let url = `https://newsapi.org/v2/${this.props.headlineType}?country=${this.props.country
    //         }&category=${this.props.category}&apiKey=6a86b2653dfa4e14bd82abceec73e53f&pageSize=${this.props.pageSize
    //         }&page=${this.state.currentPage}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({ loading: false });
    //     this.setState({
    //         articles: parsedData.articles,
    //         totalArticles: parsedData.totalResults,
    //     });

    // }

    render() {
        // let descriptionModify = (desc) => {
        //     if (desc !== null && desc.length < 135) {
        //         let dot = "";
        //         let remainingChar = 135 - desc.length;
        //         for (let i = 0; i < remainingChar; i++) {
        //             dot += ".";
        //         }
        //         return desc + dot

        //     }
        //     else if (desc === null) {
        //         let dot = "";
        //         for (let i = 0; i < 135; i++) {
        //             dot += ".";
        //         }
        //         return dot
        //     }
        //     else {
        //         return desc.slice(0, 135)
        //     }
        // }
        const articleData = this.state.articles.map(
            ({ url, title, description, urlToImage, publishedAt, source }, index) => {
                return (
                    <div className="col-md-4" key={index}>
                        <Newsitem
                            newsTitle={title}
                            newsDescription={description}
                            imageUrl={urlToImage}
                            newsUrl={url}
                            publishedAt={publishedAt}
                            source={source.name}
                            mode={this.props.mode}
                        />
                    </div>
                );
            }
        );
        return (
            <>
                <h1
                    style={{ textAlign: "center", margin: "15px 0", fontWeight: "600" }}
                >
                    Top {this.capitalizedCategory} News
                </h1>
                {/* {this.state.loading && <LoadingSpinner />} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={
                        this.state.currentPage <
                        Math.ceil(this.state.totalArticles / this.props.pageSize)
                    }
                    loader={<LoadingSpinner />}
                >
                    {this.state.loading && <LoadingSpinner />}
                    <div className="container custom">
                        <div className="row">{articleData}</div>
                    </div>
                </InfiniteScroll>
            </>
        );
    }
}

export default News;
