/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
   {
    title: "Between the World and Me Book Review",
    authors:  
      "Alex Thompson",
    conferences:
      "Mrs. Pratt's Sixth Period African American Literature Class",
    researchYr: 2024,
    citebox: "pdf.html",
    image: "assets/images/Alex Thompson - BTWAM Book Review.pdf",
    citation: {
      vancouver:
        "https://example.com",
    },
    abstract:
      "Alex will be getting an A+ on this assignment! Best review I have ever read! (Pratt)",
    absbox: "absPopup2",
  },
  {
    title: "Ta-Nehisi Coates’s new book is a monumental work about being black in America that every American urgently needs to read.",
    authors:
      "Jack Hamilton",
    conferences:
      "Slate",
    researchYr: 2015,
    citebox: "https://slate.com/culture/2015/07/between-the-world-and-me-by-ta-nehisi-coates-reviewed.html",
    image: "assets/images/research-page/Screenshot 2024-05-02 at 3.12.43 PM.png",
    citation: {
      vancouver:
        "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "A deep dive into Coates meanings and symbolisms in his profound book \"Between the World and Me\"",
    absbox: "absPopup1",
  },

 

  {
    title:
      "Ta-Nehisi Coates Revisits the Case for Reparations",
    authors: "The New Yorker",
    conferences:
      "The New Yorker",
    researchYr: 2019,
    citebox: "https://www.newyorker.com/news/the-new-yorker-interview/ta-nehisi-coates-revisits-the-case-for-reparations",
    image: "assets/images/research-page/CoatesMyGoats.png",
    citation: {
      vancouver:
        "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "A deep dive into the lasting impact of Coates ground breaking paper of the case for reperations.",
    absbox: "absPopup3",
  },

  {
    title:
      "We Were Eight Years in Power by Ta-Nehisi Coates review – on white supremacy",
    authors:
      "Annette Gordon-Reed",
    conferences:
      "The Guardian",
    researchYr: 2017,
    citebox: "https://www.theguardian.com/books/2017/nov/18/we-were-eight-years-in-power-ta-nehisi-coates-review",
    image: "assets/images/research-page/iFeelPower.png",
    citation: {
      vancouver:
        "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "This review goes into depth about how \"We Were Eight Years in Power\" examines the intricate racial dynamics that emerged both during and after Obama's presidency, equating the current racial challenges with those of Reconstruction. Coates shows through a collection of essays that how we choose to address racial injustice determines the course of the American story.",
    absbox: "absPopup4",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" onclick="window.open('${citebox}', '_blank')" aria-expanded="false" aria-controls="${citebox}">
                            RESEARCH
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
