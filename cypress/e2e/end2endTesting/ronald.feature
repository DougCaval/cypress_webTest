Feature: Login

    Scenario:Login bem sucedido.
        Given estou na pagina de login
        When eu inserir o usuário "locked_out_user"
        And inserir uma senha valida
        And clicar no botao "Login"
        Then devo ver a mensagem "Sorry, this user has been locked out."
        And devo permanecer na pagina de login.


