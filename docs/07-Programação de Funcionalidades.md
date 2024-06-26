# Programação de Funcionalidades
<br><br><br>
RF-001 / RF-002 Login
```
 module.exports = class UserController {
  static async register(req, res) {
    const { name, email, password, confirmPassword } = req.body;

    // Validations
    if (!name || !email || !password || !confirmPassword) {
      return res
        .status(422)
        .json({ message: "Informe todos os campos (nome, email e senha)." });
    }

    if (password !== confirmPassword) {
      return res.status(422).json({ message: "As senhas não conferem. Tente novamente!" });
    }

    // Check if user exists
    const checkUserExists = await User.findOne({ email: email });

    if (checkUserExists) {
      return res.status(422).json({ message: "Este e-mail já está em uso." });
    }

    // Create a password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create user
    const user = new User({
      name,
      email,
      password: passwordHash,
    });

    try {
      const newUser = await user.save();

      await createUserToken(newUser, req, res);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Aconteceu um erro no servidor, tente novamente mais tarde!",
      });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    // Validations
    if (!email || !password) {
      return res
        .status(422)
        .json({ message: "Informe todos os campos (email e senha)." });
    }

    // Check if user exists
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(422).json({ message: "Usuário não encontrado!" });
    }

    // Check if password match
    const passwordMatched = await bcrypt.compare(password, user.password);

    if (!passwordMatched) {
      return res.status(404).json({ message: "E-mail e/ou senha incorreta." });
    }

    await createUserToken(user, req, res);
  }

  static async checkUser(req, res) {
    let currentUser;

    if (req.headers.authorization) {
      const token = getToken(req);
      const decoded = jwt.verify(token, "secret");

      currentUser = await User.findById(decoded.id);

      currentUser.password = undefined;
    } else {
      currentUser = null;
    }

    res.status(200).send(currentUser);
  }

  static async getUserById(req, res) {
    const id = req.params.id;
    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(422).json({ message: "Usuário não encontrado!" });
    }

    res.status(200).json({ user });
  }

  static async editUser(req, res) {
    const id = req.params.id;

    // Check by token
    const token = getToken(req);
    const user = await getUserByToken(token);

    const { name, email, password, confirmPassword } = req.body;

    let image = "";

    // Validations
    if (!name || !email || !password || !confirmPassword) {
      return res
        .status(422)
        .json({ message: "Informe todos os campos (nome, email e senha)." });
    }

    // Check if email has already taken
    const checkEmailExists = await User.findOne({ email: email });

    if (user.email !== email && checkEmailExists) {
      return res.status(422).json({ message: "Este e-mail já está em uso." });
    }

    user.email = email;

    if (password !== confirmPassword) {
      return res.status(422).json({ message: "As senhas não conferem!" });
    } else if (password === confirmPassword && password !== null) {
      // Create a password
      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);

      user.password = passwordHash;
    }

    try {
      // Return User updated data
      await User.findOneAndUpdate(
        { _id: user._id },
        { $set: user },
        { new: true }
      );

      res.status(200).json({ message: "Usuário atualizado com sucesso!" });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
      return;
    }
  }
```
RF - 004 Histórico

<br> <br> <br>


```
// OK
  async createHist(req, res){
    try {
        let agora = new Date()
            , exer_id = req.body.exer_id
            , user_id = req.body.user_id 
        ;

        const hist = {
            _id: uuid.v4(), 
            exer_id: exer_id,
            data: agora,
        };

        const updated = await UserModel.findByIdAndUpdate(user_id, {
            $push: { historicos: hist },
        }, { new: true });

        res.status(201).json({ response, message: "Histórico criado" });

    } catch (error) {
         console.log(error);
    }
  }

  // OK
  async getAllHist(req, res){
    try {
        const id = req.params.id;
        const item = await UserModel.findById(id,
            {historicos: 1}
        );

        res.json(item);

    } catch (error) {
      console.log(error);
    }
  }

  // OK
  async deleteHist(req, res){
    try {
        let user_id = req.body.user_id
            , hist = {
                _id: req.body.hist_id
            }
        ;

        const updated = await UserModel.findByIdAndUpdate(user_id, {
            $pull: { historicos: hist },
        }, { new: true });

      res.status(200).json({ deleted, message: "Histórico deletado" });

    } catch (error) {
      console.log(error);
    }
  }
  
};
```
Banco de dados Conection 

```
const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {

    const dbUser = process.env.DB_USER;
    const dbPassword = process.env.DB_PASS;

    await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.hhjfolf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );

    console.log('Conectado ao banco!')
}

connectDB().catch((error) => console.log(error))

module.exports = mongoose;


