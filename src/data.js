import toothFilling from "./assets/tooth-filling.svg"
import toothRoot from "./assets/tooth-root.svg"
import toothWhitening from "./assets/tooth-whitening.svg"
import toothProsthesis from "./assets/tooth-prosthesis.svg"
import toothVeneer from "./assets/tooth-veneer.svg"
import toothNightPlate from "./assets/tooth-nightPlate.svg"
import tooth from "./assets/tooth.svg"

const data = [
  {
    comments: [
      {
        comment:
          "Çok temiz ve hijyenik bir klinikte hizmet verilmekte ben çok memnun kaldım uzman diş hekimi bence işinde çok iyi diş konusunda hiç tereddüt etmeden gidebilirsiniz.",
        owner: "Zeki C.",
      },
      {
        comment:
          "Dişlerimi yaptırdım, çok şükür hiçbir sıkıntı yaşamadım. Güler yüz ve dürüstlüklerinden ötürü çok çok teşekkür ederim. Allah razı olsun diye hep dua ederim.",
        owner: "Ahmet B.",
      },
      {
        comment:
          "Ciddi derecede diş ağrım vardı iyi bir hizmet ve güler yüzlü bir ekiple tedavimi başarıyla yaptılar herkese tavsiye ederim teşekkürler",
        owner: "Baran K.",
      },
      {
        comment:
          "Çok memnun kaldım her zaman tavsiye edeceğim bir klinik temiz ve hijyenik ilgi ve alakalarından dolayı teşekkür ediyorum",
        owner: "Özhan Ö.",
      },
      {
        comment:
          "Yıllardır severek ve güvenerek gittiğim bir diş hekimi herkese şiddetle tavsiye ederim çok sıcak kanlı ve mukkemel insanlar ve işlerinde gayet başarılılar ilgi ve alakaniz için teşekkür ederim",
        owner: "Berat Ç.",
      },
      {
        comment:
          "Diş temizliği için gittim gerçekten çok memnun kaldım çok teşekkür ediyorum",
        owner: "Gökhan E.",
      },
    ],
  },
  {
    services: [
      {
        service: "Diş Dolgusu",
        about:
          "Sağlıklı dişler genel sağlık için önemlidir, ancak zamanla bir dişin yapısı bozulabilir. Diş dolguları çürükleri, çatlamış veya kırılmış dişleri onarır. İster köpek dişlerinizden birinin arkasında ağrılı bir çürük olsun, ister bir kaza sonucu dişiniz kırılmış olsun, size yardımcı olmak için buradayız.",
        image: toothFilling,
      },
      {
        service: "Kanal Tedavisi",
        about:
          "Çürümeyi ve enfeksiyonu durdurmanın, dişinizi çekilmekten kurtarmanın güvenli, basit ve etkili bir yolu olan kanal tedavisi ile size yardımcı olabiliriz. Çürükleri gidereceğiz, kanal sisteminizi temizleyip dezenfekte edeceğiz ve kanalı kapatacağız. Ayrıca, dişinizi kaplayıp koruyacak, güzelliğini ve işlevselliğini geri kazandıracak özel bir kaplama tasarlayacağız.",
        image: toothRoot,
      },
      {
        service: "Diş Beyazlatma",
        about:
          "Yaşınız, sigara, çay, kahve ve soda gibi alışkanlıklarınız dişlerinizin doğal beyaz rengine zarar verebilir. Maalesef, lekeli dişler daha yaşlı görünmenize ve kendinizi daha az güvende hissetmenize neden olabilir. Tek bir ziyarette, profesyonel diş beyazlatma tedavilerimiz gülümsemenizi önemli ölçüde aydınlatacaktır.",
        image: toothWhitening,
      },
      {
        service: "Diş Protezi",
        about:
          "Diş protezleri, kayıp dişlerinizi yerine koymak ve doğal bir gülümseme sağlamak için etkili bir çözümdür. Yaşlanma, kazalar veya diğer nedenlerle kaybettiğiniz dişler için idealdir. Diş protezleri, fonksiyonel ve estetik açıdan mükemmel sonuçlar sağlayarak günlük yaşamınızı kolaylaştırabilir. Size özel olarak tasarlanan protezlerimizle gülümsemenizi yeniden kazanmanıza yardımcı olabiliriz.",
        image: toothProsthesis,
      },
      {
        service: "Porselen Diş Kaplama",
        about:
          "Porselen diş kaplamaları, çürükleri, kırıkları veya renk bozukluklarını düzeltmek ve gülüşünüzü iyileştirmek için mükemmel bir seçenektir. Doğal diş renginize uygun olarak tasarlanan kaplamalar, dişlerinizin doğal görünümünü korurken dayanıklılık ve estetik sağlar. Size özel olarak uygulanan kaplamalarımızla gülüşünüzde önemli bir değişiklik yapabiliriz.",
        image: toothVeneer,
      },
      {
        service: "Zirkonyum Diş Kaplama",
        about:
          "Zirkonyum diş kaplamaları, dayanıklılığı ve doğal görünümü ile bilinen son derece etkili bir diş tedavi seçeneğidir. Geleneksel porselen kaplamalardan daha dayanıklıdır ve estetik açıdan da son derece başarılı sonuçlar sağlar. Size özel olarak tasarlanan zirkonyum kaplamalarımız ile gülüşünüzde kalıcı bir değişiklik yapabiliriz.",
        image: toothVeneer,
      },
      {
        service: "Şeffaf Plak",
        about:
          "Şeffaf plaklar, düzensiz dişleri düzeltmek, dişler arasındaki boşlukları kapatmak veya hafif diş çapraşıklıklarını düzeltmek için kullanılan etkili bir tedavi seçeneğidir. Geleneksel tel tedavisine göre daha rahat ve estetiktirler. Şeffaf plaklar, gülüşünüzü düzeltmek için güvenli ve etkili bir seçenek sunar. Size özel olarak hazırlanan plaklarımız ile istediğiniz gülüşe kavuşmanıza yardımcı olabiliriz.",
        image: toothNightPlate,
      },
      {
        service: "Diş Çekimi",
        about:
          "Diş çekimi, dişlerin çürümesi, kırılması veya diğer nedenlerle iyileştirilemez hale gelmesi durumunda gereken bir tedavidir. Diş çekimi genellikle lokal anestezi altında yapılır ve genellikle hızlı ve sorunsuz bir şekilde tamamlanır. Diş çekimi sonrası, uzmanlarımız size uygun tedavi seçenekleri sunarak, diş kaybının olumsuz etkilerini en aza indirmenize yardımcı olacaktır.",
        image: tooth,
      },
    ],
  },
]

export default data
