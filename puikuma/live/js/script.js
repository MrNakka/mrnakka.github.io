const twitchClientId = "xhw4n4yc1k3ud8shmurfv2aen0065e";
const twitchAccessToken = "jkxum10h2kyclasguj4kom6cifiwyo";
const youtubeApiKey = "AIzaSyCplNawJ-Wzm4X4YW58ICD5K6kLuDUQG5s";

const channels = [
  // Twitch: name = ユーザー名, displayName = 任意表示名
  { type: "twitch", name: "aisakamegumi", displayName: "逢坂愛", images: "1867137858416582656.jpg" },
  { type: "twitch", name: "aomisora34", displayName: "青海そら", images: "1906330263212392451.jpg" },
  { type: "twitch", name: "akinose", displayName: "Akinose", images: "1209872080247721984.jpg" },
  { type: "twitch", name: "realakubiroom", displayName: "あくび氏", images: "1915410299416629248.jpg" },
  { type: "twitch", name: "asssui", displayName: "asui", images: "1774792341280501760.jpg" },
  { type: "twitch", name: "asem_yu", displayName: "あせむ", images: "1925322305628200960.jpg" },
  { type: "twitch", name: "add0ne", displayName: "add0ne", images: "1907066036572315648.jpg" },
  { type: "twitch", name: "neko_hiroshi", displayName: "あなん", images: "1777269409788383232.jpg" },
  { type: "twitch", name: "abuabusaisai", displayName: "危ないサイトにはいくな", images: "1323226595000160256.jpg" },
  { type: "twitch", name: "sioosio", displayName: "あまいしお", images: "1927420100295958529.jpg" },
  { type: "twitch", name: "amaha_ailu", displayName: "天翼あいる", images: "1727141258483859456.jpg" },
  { type: "twitch", name: "tsuyoshi_ando", displayName: "安藤つ良し", images: "1911575415610593280.jpg" },
  { type: "twitch", name: "anaizon", displayName: "あんない", images: "1477446163997806592.jpg" },
  { type: "twitch", name: "erika_ichin015", displayName: "苺乃えりか", images: "1753246854605873152.jpg" },
  { type: "twitch", name: "inorinroom", displayName: "祈【CAXIADESIGN】", images: "1937832937640394752.jpg" },
  { type: "twitch", name: "widow64", displayName: "widow", images: "1926181096229593088.jpg" },
  { type: "twitch", name: "william_naokichi", displayName: "ウィリアムなおきち", images: "1662826337168654336.jpg" },
  { type: "twitch", name: "tnr_usane", displayName: "うさね", images: "1929672950250393600.jpg" },
  { type: "twitch", name: "usa4yu", displayName: "兎華 遥歩", images: "1912847218295595008.jpg" },
  { type: "twitch", name: "usagisensei0730", displayName: "うさぴーん", images: "1925440665196142592.jpg" },
  { type: "twitch", name: "amato_vw", displayName: "雅楽アマト", images: "1916536659518300160.jpg" },
  { type: "twitch", name: "ebichan_2525", displayName: "海音えびこ", images: "1918110321665032192.jpg" },
  { type: "twitch", name: "etsuko_", displayName: "etsuko_", images: "1764246867309944832.jpg" },
  { type: "twitch", name: "enishich", displayName: "えにし", images: "1585331087764377600.jpg" },
  { type: "twitch", name: "ebi10kun", displayName: "えび天くん", images: "1855530771332907008.jpg" },
  { type: "twitch", name: "ouka_kurenai", displayName: "桜花クレナイ", images: "1717681917158707200.jpg" },
  { type: "twitch", name: "oka_fps", displayName: "oka", images: "1364121904416653312.jpg" },
  { type: "twitch", name: "osakana3rabbit", displayName: "osakana3", images: "1842135095924432896.jpg" },
  { type: "twitch", name: "zawakun47", displayName: "小澤直将", images: "1414423986272755716.jpg" },
  { type: "twitch", name: "k4sq", displayName: "k4sq(かさ)", images: "1455559336332500992.jpg" },
  { type: "twitch", name: "gasken0305", displayName: "がすけん", images: "1912456988862156800.jpg" },
  { type: "twitch", name: "mutou_beast", displayName: "カズっす", images: "1929656018927341573.jpg" },
  { type: "twitch", name: "gata_games_1215", displayName: "Gata", images: "1486727184383635456.jpg" },
  { type: "twitch", name: "kuran_kakko", displayName: "【かっこ】", images: "1770851387150082049.jpg" },
  { type: "twitch", name: "kanatayona", displayName: "宇宙よな", images: "1881373243128569856.jpg" },
  { type: "twitch", name: "renren2210", displayName: "過労キティ", images: "1677625359913877505.jpg" },
  { type: "twitch", name: "kikinene", displayName: "ききねー", images: "1927924232815874048.jpg" },
  { type: "twitch", name: "ginogino00000", displayName: "ギノギノ", images: "1924824164839669760.jpg" },
  { type: "twitch", name: "giveupoji3", displayName: "GiveUpOji3", images: "1573696145045323776.jpg" },
  { type: "twitch", name: "ki_mu_ra_g", displayName: "キムラ", images: "1779198277793247232.jpg" },
  { type: "twitch", name: "wqil_123", displayName: "キル久保わいる", images: "1705128532937261056.jpg" },
  { type: "twitch", name: "kujo_kiriko", displayName: "紅嬢切子", images: "1923820300275232768.jpg" },
  { type: "twitch", name: "gahu3", displayName: "くま沢ガフ美", images: "1913320038448422912.jpg" },
  { type: "twitch", name: "achan_tiktok_", displayName: "くろねこ えいらttv", images: "1928793794591469570.jpg" },
  { type: "twitch", name: "gngn_kosino", displayName: "ぐんこしの", images: "1608535585156902912.jpg" },
  { type: "twitch", name: "gebo_6", displayName: "Gebo", images: "1884891275708727296.jpg" },
  { type: "twitch", name: "kentoobeta", displayName: "ケントゥベータ", images: "1573605067403694086.jpg" },
  { type: "twitch", name: "gomiko41", displayName: "五味", images: "1904513595838550016.jpg" },
  { type: "twitch", name: "angeeel_ocs", displayName: "ころにっけ", images: "1929815724756971520.jpg" },
  { type: "twitch", name: "altra_sagara", displayName: "サガラ", images: "1694577197540163584.jpg" },
  { type: "twitch", name: "sakushi86", displayName: "さくし", images: "1651424616584478720.jpg" },
  { type: "twitch", name: "satoasmr", displayName: "佐藤ちゆり", images: "1936281491312607232.jpg" },
  { type: "twitch", name: "sunystudio", displayName: "サニースタジオ", images: "1494232062362284032.jpg" },
  { type: "twitch", name: "ku_ma2525", displayName: "彷徨うくま", images: "1671078682621005826.jpg" },
  { type: "twitch", name: "samurai_36ra1", displayName: "さむらい", images: "1821722800534716416.jpg" },
  { type: "twitch", name: "saya0725", displayName: "saya", images: "1536547142508363776.jpg" },
  { type: "twitch", name: "3zame7nuka", displayName: "潸鮫ナヌカ", images: "1904662405218787328.jpg" },
  { type: "twitch", name: "seakerdesu", displayName: "しーか", images: "872710081489457152.jpg" },
  { type: "twitch", name: "shiimama", displayName: "しぃまま", images: "1803208851765993473.jpg" },
  { type: "twitch", name: "saltsan16", displayName: "しお姉", images: "1903732245988593664.jpg" },
  { type: "twitch", name: "shiki_senpai3", displayName: "しき先輩", images: "1454845364130164736.jpg" },
  { type: "twitch", name: "shikiyoichi", displayName: "四季 夜緻", images: "1906907070265536512.jpg" },
  { type: "twitch", name: "sigusigu0714", displayName: "しぐしぐしぐ", images: "1531856583831220224.jpg" },
  { type: "twitch", name: "shinano11yayo", displayName: "紫那乃やよ", images: "1917747939361054724.jpg" },
  { type: "twitch", name: "sino_miya", displayName: "篠宮", images: "1894207591250538496.png" },
  { type: "twitch", name: "witone_ttv", displayName: "朱卯", images: "1895282053605666817.jpg" },
  { type: "twitch", name: "juritan", displayName: "juri", images: "1883482729628766208.jpg" },
  { type: "twitch", name: "jyozu1", displayName: "ジョーズ", images: "661528390453751808.jpg" },
  { type: "twitch", name: "babweee", displayName: "ジン・バブ江", images: "1910699921210302465.jpg" },
  { type: "twitch", name: "tunaguuuu", displayName: "スーパー社会人つなぐぅ", images: "1926709766421663745.jpg" },
  { type: "twitch", name: "super_toshiko", displayName: "スーパーとし子", images: "1554787162897682432.jpg" },
  { type: "twitch", name: "suzukiyura", displayName: "鈴木ゆら", images: "1899058075748966400.jpg" },
  { type: "twitch", name: "sumi1929", displayName: "スミ院長", images: "1833193717844606977.jpg" },
  { type: "twitch", name: "hakuren_vt", displayName: "皇白蓮", images: "1918642399620009984.jpg" },
  { type: "twitch", name: "surini111", displayName: "スリーニー", images: "1588738904651632640.jpg" },
  { type: "twitch", name: "sein_rax", displayName: "セイン", images: "1868406136606777344.jpg" },
  { type: "twitch", name: "c_e_o_maharajyo", displayName: "c.e.o.", images: "1831784065768550406.jpg" },
  { type: "twitch", name: "sekainonorihito", displayName: "世界のノリヒト", images: "1478768797503094785.jpg" },
  { type: "twitch", name: "senzsan", displayName: "せんず", images: "1829842463139446784.jpg" },
  { type: "twitch", name: "sovault", displayName: "ソバルト", images: "1405184908398522370.jpg" },
  { type: "twitch", name: "taakuu_okisaba", displayName: "たぁくぅ", images: "1694712911627948033.jpg" },
  { type: "twitch", name: "popo_takanasi", displayName: "小鳥遊ぽぽ", images: "1910385743102697475.jpg" },
  { type: "twitch", name: "dago_makaseroi", displayName: "だごマカセロイ", images: "1703400766101454848.jpg" },
  { type: "twitch", name: "h0t0__", displayName: "橘ほと", images: "1816864599779749888.jpg" },
  { type: "twitch", name: "tachi873", displayName: "太刀華 麗", images: "1908148802357497857.jpg" },
  { type: "twitch", name: "chino_xoxo", displayName: "ちの", images: "1920450266865741824.jpg" },
  { type: "twitch", name: "chapihara", displayName: "ちゃぴはら", images: "1469507946761494532.jpg" },
  { type: "twitch", name: "tyanmash", displayName: "ちゃんまー", images: "1879164370560929792.jpg" },
  { type: "twitch", name: "tsukinekogames", displayName: "月希猫", images: "1891367389067202560.jpg" },
  { type: "twitch", name: "tepotamasann", displayName: "てぽたま", images: "1411210893279383555.jpg" },
  { type: "twitch", name: "t0ki335", displayName: "とおき", images: "1364273094941044736.jpg" },
  { type: "twitch", name: "dottocomsan", displayName: "どっとこむさん", images: "1881655075480993792.jpg" },
  { type: "twitch", name: "tomita_kwaidan", displayName: "富田安洋", images: "1842567588313985024.jpg" },
  { type: "twitch", name: "nakoson", displayName: "nakoson", images: "1745522162000388096.jpg" },
  { type: "twitch", name: "namojin_wolf", displayName: "なもじん", images: "1926326580730548225.jpg" },
  { type: "twitch", name: "thenio9999", displayName: "Nio", images: "1931968935504883712.jpg" },
  { type: "twitch", name: "nicochin_ttv", displayName: "ニコチン兄貴", images: "1817041727208980480.jpg" },
  { type: "twitch", name: "nizimiyamutuki_vt", displayName: "虹宮睦月", images: "1751834145410744320.jpg" },
  { type: "twitch", name: "newsaan", displayName: "Newsaan", images: "1468516756339650565.jpg" },
  { type: "twitch", name: "noel_nekomiya", displayName: "猫宮のえる", images: "1881843000575414274.jpg" },
  { type: "twitch", name: "norishio_42", displayName: "のりしお_ぽて氏", images: "1554185016027975680.jpg" },
  { type: "twitch", name: "pppppisa", displayName: "ひぃ坊", images: "1925471734964396033.jpg" },
  { type: "twitch", name: "big_eru", displayName: "BIG_eru", images: "1521410710701764608.jpg" },
  { type: "twitch", name: "hibikikanon", displayName: "響歌音", images: "1587212740854444033.jpg" },
  { type: "twitch", name: "buccii1108", displayName: "ぶっちー", images: "1887412588679733249.jpg" },
  { type: "twitch", name: "blastbeefpatty", displayName: "ぶらすとびーふ", images: "1853623363731922944.jpg" },
  { type: "twitch", name: "yuttaripeko0102", displayName: "pekozakura", images: "1870176700484726784.jpg" },
  { type: "twitch", name: "pojien", displayName: "ぽじえん", images: "1659420414941216769.jpg" },
  { type: "twitch", name: "nikothinkun", displayName: "ほね太", images: "1783674698779467776.jpg" },
  { type: "twitch", name: "holykundazo", displayName: "ほりーくんだぞっ", images: "1858886829766045700.jpg" },
  { type: "twitch", name: "mr_offal", displayName: "ホルモンくん", images: "1937750365753200640.jpg" },
  { type: "twitch", name: "pon_nage", displayName: "ぽんなげ", images: "1724010349802979328.jpg" },
  { type: "twitch", name: "makunouchi624", displayName: "makunouchi624", images: "1903016511310319616.jpg" },
  { type: "twitch", name: "mashita_maue", displayName: "真下", images: "1603385857729347589.jpg" },
  { type: "twitch", name: "mana__07", displayName: "ﾏﾅ", images: "1904609003541512192.jpg" },
  { type: "twitch", name: "marunnn_", displayName: "marunnn", images: "1681210463303139329.jpg" },
  { type: "twitch", name: "mikionion", displayName: "みきおにおん", images: "1714091894463172608.jpg" },
  { type: "twitch", name: "miikichi_", displayName: "みきち", images: "1902684077830107136.jpg" },
  { type: "twitch", name: "39neko0525", displayName: "三毛猫", images: "1774981487559127040.jpg" },
  { type: "twitch", name: "mimicchi", displayName: "mimicchi", images: "1509765321175236608.jpg" },
  { type: "twitch", name: "saramiyahara", displayName: "宮原さら", images: "1867855783389777920.jpg" },
  { type: "twitch", name: "ggmugicha", displayName: "むぎちゃ", images: "1816078239548465152.jpg" },
  { type: "twitch", name: "murakamisuigun", displayName: "むらまこ", images: "1576951507336904705.jpg" },
  { type: "twitch", name: "murosann23", displayName: "むろさん", images: "1873744920777027584.jpg" },
  { type: "twitch", name: "memeco00", displayName: "めめこめめ", images: "1815784603581554688.jpg" },
  { type: "twitch", name: "momonoeyumo", displayName: "桃枝ゆも", images: "1898855443277164544.jpg" },
  { type: "twitch", name: "samuraimori3", displayName: "もりさん", images: "1520672308192747520.jpg" },
  { type: "twitch", name: "yappy3838", displayName: "やっぴーちゃんねる", images: "1925594797164867584.jpg" },
  { type: "twitch", name: "yamadamei_", displayName: "山田めい", images: "1880592364009586688.jpg" },
  { type: "twitch", name: "yousukebiggod", displayName: "山本洋介", images: "1664535298695643138.jpg" },
  { type: "twitch", name: "yankadayo", displayName: "やんか", images: "1936375122799239168.jpg" },
  { type: "twitch", name: "youbowchandayo", displayName: "ゆうぼう", images: "1844348112099475456.jpg" },
  { type: "twitch", name: "06yuki11", displayName: "ゆきちゃんttv", images: "1750471241998491648.jpg" },
  { type: "twitch", name: "yoshiox11", displayName: "よしおっくす", images: "1577105424494792704.jpg" },
  { type: "twitch", name: "limesan_ttv", displayName: "らいむさん", images: "1937349596549873664.jpg" },
  { type: "twitch", name: "rock_and_packing", displayName: "らっくん", images: "1928992766425706496.jpg" },
  { type: "twitch", name: "rabbi_uoxou", displayName: "らびちゃ_ttv", images: "1930599495269810176.jpg" },
  { type: "twitch", name: "ramia_2525", displayName: "らみあ", images: "1474954868549111810.png" },
  { type: "twitch", name: "rumch_", displayName: "ラム", images: "1916113195540090883.jpg" },
  { type: "twitch", name: "llycxp", displayName: "りこぴち", images: "1708820533935247360.jpg" },
  { type: "twitch", name: "riskivzyatz", displayName: "RiskivzyAt'z", images: "1153089087550525440.jpg" },
  { type: "twitch", name: "r_kaneko", displayName: "リメンバー金子", images: "1601016420577337344.jpg" },
  { type: "twitch", name: "ryuh3y", displayName: "りゅうへー", images: "1405419765758263300.jpg" },
  { type: "twitch", name: "ryow_alldevice_jp", displayName: "Ryow", images: "1813878479768973313.jpg" },
  { type: "twitch", name: "lildora_twitch", displayName: "Lil Dora", images: "1931724515761156096.jpg" },
  { type: "twitch", name: "reikira_", displayName: "れいきら", images: "1906995619115524096.jpg" },
  { type: "twitch", name: "reganga", displayName: "レガンガ", images: "1892856630859223042.jpg" },
  { type: "twitch", name: "redcrusades", displayName: "レッドクラウド", images: "1787296502005796864.jpg" },
  { type: "twitch", name: "content_rate1percent", displayName: "れとわん", images: "1873251989381103619.jpg" },
  { type: "twitch", name: "waowao0001", displayName: "わおわお", images: "1913848356843278336.jpg" },
  { type: "twitch", name: "wakutine7", displayName: "わくち", images: "1892017451384307715.jpg" },
  { type: "twitch", name: "wakwakjp", displayName: "わくわく", images: "1818608038976405506.jpg" },
  { type: "twitch", name: "wataboujp", displayName: "WATABOUjp", images: "1600865546173829125.jpg" },
  // YouTube: id = チャンネルID, displayName = 任意表示名
  { type: "youtube", id: "UCT6iRPtBcmLrK2f0U1iDmjg", displayName: "あふろ" },
  { type: "youtube", id: "UCBR8-60-B28hp2BmDPdntcQ", displayName: "YouTube公式" }
];

async function checkTwitch(channel) {
  const url = `https://api.twitch.tv/helix/streams?user_login=${channel.name}`;
  const res = await fetch(url, {
    headers: {
      "Client-ID": twitchClientId,
      "Authorization": `Bearer ${twitchAccessToken}`
    }
  });
  const data = await res.json();
  return data.data && data.data.length > 0;
}

async function checkYouTube(channel) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channel.id}&type=video&eventType=live&key=${youtubeApiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.items && data.items.length > 0;
}

function getChannelLink(channel) {
  if (channel.type === "twitch") {
    return `https://www.twitch.tv/${channel.name}`;
  } else if (channel.type === "youtube") {
    return `https://www.youtube.com/channel/${channel.id}`;
  }
  return "#";
}

async function updateStatus() {
  const container = document.getElementById("channels");
  container.innerHTML = "";

  let liveCount = 0;

  for (const ch of channels) {
    let isLive = false;
    try {
      if (ch.type === "twitch") {
        isLive = await checkTwitch(ch);
      } else if (ch.type === "youtube") {
        isLive = await checkYouTube(ch);
      }
    } catch (e) {
      console.error("Error checking status:", e);
    }

    if (!isLive) continue; // オフラインならスキップ

    const div = document.createElement("div");
    div.className = "channel";

    const link = getChannelLink(ch);
    const label = ch.type === "twitch" ? "Twitch" : "YouTube";
    const name = ch.displayName || ch.name || ch.id;
    const images = ch.images

    div.innerHTML = `
    <div>
      <a href="${link}" target="_blank">
        <p class="user-name">${name}</p>
        <p class="user-img"><img src="/puikuma/imgs/member/${images}"></p>
      </a>
    </div>
    `;

    container.appendChild(div);
    liveCount++;
  }

  if (liveCount === 0) {
    container.innerHTML = `<div>現在、配信中のチャンネルはありません。</div>`;
  }
}

updateStatus();
setInterval(updateStatus, 15 * 60 * 1000); // 15分ごとに更新