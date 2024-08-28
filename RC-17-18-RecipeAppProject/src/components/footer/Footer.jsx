import "./Footer.css";
import AktLogo from "../../assets/AKTfooter.png"

const Footer = () => {
  return (
    <div className="footer-div">
      <a
        href="https://github.com/KadirTarti"
        target="_blank"
        rel="noopener noreferrer"
        // Noreferrer etiketi önceleri noopener etiketiyle beraber kullanılan, target=”_blank” etiketinden gelebilecek tehditlere karşı sitenizi ve bilgisayarınızı korumak için noopener etiketiyle birlikte komut oluşturan etikettir. Güvenlik açıklarını kapatabilmek ve SEO çalışmalarına da katkıda bulunmak için noopenerle birlikte yazılan noreferrer, WordPress’in güvenliği iyileştirmeye yönelik yeni güncellemeleriyle kaldırıldı ve noopener etiketi tek başına kullanılmaya başlandı.
        // Noopener, web sitenizin güvenliğini artırmak ve diğer web sitelerinin sayfanıza erişim sağlamasını önlemek için gereklidir (tarayıcı oturumu aracılığıyla).
        // Noreferrer, yönlendirme bilgilerinin hedef web sitesine aktarılmasını önlemek için kullanılır ve bu aynı zamanda Google analitikteki yönlendirme trafiğini de gizler.
        style={{ textDecoration: "none" }}
      >
        <code>{"< AKT Development !/> "}</code>
        {/* <></> işaretleriyle kod formatında yazabilmek  için code */}
      </a>
      
      <a  href="https://github.com/KadirTarti">

      <img
        src={AktLogo}
        alt="design"
        style={{ width: "50px", borderRadius:"50%",  margin: "0  25px 0 10px" }}
      />
      </a>
      <span>Copyright {new Date().getFullYear()}</span>
    </div>
  );
};

export default Footer;
