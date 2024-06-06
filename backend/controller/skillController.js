const userModel = require("../models/Users");
const { skillModel } = require("../models/Skills");



exports.submitScore = async (req, res) => {
  const { score, title, userId } = req.body;
  let isSame = false

  // console.log(score, title, userId, accessToken);

  try {
    // find USER
    // let user = await userModel.findOne({
    //   _id: userId,
    // });
    // let getSkill = await userModel.find({ _id: userId }, 'skills')


    // for (let index = 0; index < user.skills.length; index++) {
    //     const element = user.skills[index];
    //     console.log(element);
    //     if (element.title === title) {
    //         console.log();
    //     }
    // }

    // bring USER_ID

    // push in to skill array
    const user = await userModel.findOneAndUpdate({
        _id: userId
    }, 
    {
        $addToSet: {
            skills: {
                title: title,
                score: score
            }
        }
    }
)
    // console.log(user);


    // const User = await userModel.findOne({ userId }).populate('skills')


    res.status(201).json({
      message: "Success",
      data: user,
    });

  } catch (error) {
    console.log(`41 Error: ${error.message}`);
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await userModel.findById(userId).populate('skills')

        user.password = undefined;
        
        console.log(user);
        res.status(200).json({
            message: "success",
            data: user
        })
    } catch (error) {
        
    }
};

