const EducationCertificateNFT = artifacts.require("EducationCertificateNFT.sol");

module.exports = function (deployer) {
  // Déploiement du contrat avec les paramètres nécessaires
  deployer.deploy(EducationCertificateNFT, "EducationCertificateNFT", "EduCerNFT");
    
};
