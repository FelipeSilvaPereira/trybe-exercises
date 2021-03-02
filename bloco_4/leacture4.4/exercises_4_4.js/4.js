let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  console.log("bem-vinda," + " " + (info.personagem)) ; 

  info["recorrente"] = "sim" ;

  console.log(info['recorrente']) ;

  for (let key in info) {
      console.log(info[key]);
  }

  let info2 = {
    personagem: "tio patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics # 178 ",
    nota: "O último MacPatinhas",
    recorrente: "sim",
  };

for (let properties in info) {
  if (
    info[properties] === info.recorrente &&
    info[properties] === "Sim" &&
    info2[properties] === "Sim"
  ) {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[properties] + " e " + info2[properties]);
  }
}