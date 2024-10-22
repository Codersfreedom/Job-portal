import Interview from "../../models/Inverview.js";
import sendMailToUsers from "../../services/nodemailer.js";

export const createInterview = async (req, res) => {
  try {
    const { title, description, experience, candidate, endDate } = req.body;

    const interview = await Interview.create({
      title,
      description,
      experience,
      candidate,
      endDate,
    });

    if (interview) {
      const content = `Dear candidate,Congratulations you are selected for an interview from cuvette.Your interview is scheduled on ${endDate}.`;

      for(let i=0;i<candidate.length;i++){
        await sendMailToUsers(candidate[i],content);
      }        

    }

    res.status(201).json({ status: true, message: "Interview created" });
  } catch (error) {
    console.log("Error while creating interview", error.message);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};
