
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { PortugolListener } from "./PortugolListener.js";
import { PortugolVisitor } from "./PortugolVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class PortugolParser extends antlr.Parser {
    public static readonly ABRE_PARENTESES = 1;
    public static readonly FECHA_PARENTESES = 2;
    public static readonly ABRE_COLCHETES = 3;
    public static readonly FECHA_COLCHETES = 4;
    public static readonly ABRE_CHAVES = 5;
    public static readonly FECHA_CHAVES = 6;
    public static readonly TIPO = 7;
    public static readonly FACA = 8;
    public static readonly ENQUANTO = 9;
    public static readonly PARA = 10;
    public static readonly SE = 11;
    public static readonly SENAO = 12;
    public static readonly CONSTANTE = 13;
    public static readonly FUNCAO = 14;
    public static readonly PROGRAMA = 15;
    public static readonly ESCOLHA = 16;
    public static readonly CASO = 17;
    public static readonly CONTRARIO = 18;
    public static readonly PARE = 19;
    public static readonly RETORNE = 20;
    public static readonly INCLUA = 21;
    public static readonly BIBLIOTECA = 22;
    public static readonly OP_NAO = 23;
    public static readonly OP_E_LOGICO = 24;
    public static readonly OP_OU_LOGICO = 25;
    public static readonly OP_SUBTRACAO = 26;
    public static readonly OP_ADICAO = 27;
    public static readonly OP_MULTIPLICACAO = 28;
    public static readonly OP_DIVISAO = 29;
    public static readonly OP_MOD = 30;
    public static readonly OP_ATRIBUICAO = 31;
    public static readonly OP_IGUALDADE = 32;
    public static readonly OP_DIFERENCA = 33;
    public static readonly OP_MAIOR = 34;
    public static readonly OP_MENOR = 35;
    public static readonly OP_MENOR_IGUAL = 36;
    public static readonly OP_MAIOR_IGUAL = 37;
    public static readonly OP_INCREMENTO_UNARIO = 38;
    public static readonly OP_DECREMENTO_UNARIO = 39;
    public static readonly OP_SHIFT_LEFT = 40;
    public static readonly OP_SHIFT_RIGHT = 41;
    public static readonly OP_XOR = 42;
    public static readonly OP_OU_BITWISE = 43;
    public static readonly OP_NOT_BITWISE = 44;
    public static readonly OP_ALIAS_BIBLIOTECA = 45;
    public static readonly E_COMERCIAL = 46;
    public static readonly OP_MAIS_IGUAL = 47;
    public static readonly OP_MENOS_IGUAL = 48;
    public static readonly OP_MULTIPLICACAO_IGUAL = 49;
    public static readonly OP_DIVISAO_IGUAL = 50;
    public static readonly LOGICO = 51;
    public static readonly VERDADEIRO = 52;
    public static readonly FALSO = 53;
    public static readonly CARACTER = 54;
    public static readonly STRING = 55;
    public static readonly ID = 56;
    public static readonly REAL = 57;
    public static readonly INT = 58;
    public static readonly HEXADECIMAL = 59;
    public static readonly COMENTARIO = 60;
    public static readonly COMENTARIO_SIMPLES = 61;
    public static readonly WS = 62;
    public static readonly PONTO = 63;
    public static readonly VIRGULA = 64;
    public static readonly PONTOVIRGULA = 65;
    public static readonly DOISPONTOS = 66;
    public static readonly RULE_arquivo = 0;
    public static readonly RULE_inclusaoBiblioteca = 1;
    public static readonly RULE_listaDeclaracoes = 2;
    public static readonly RULE_declaracao = 3;
    public static readonly RULE_declaracaoVariavel = 4;
    public static readonly RULE_declaracaoMatriz = 5;
    public static readonly RULE_inicializacaoMatriz = 6;
    public static readonly RULE_linhaMatriz = 7;
    public static readonly RULE_colunaMatriz = 8;
    public static readonly RULE_declaracaoArray = 9;
    public static readonly RULE_inicializacaoArray = 10;
    public static readonly RULE_tamanhoArray = 11;
    public static readonly RULE_declaracaoFuncao = 12;
    public static readonly RULE_parametroFuncao = 13;
    public static readonly RULE_listaParametros = 14;
    public static readonly RULE_parametro = 15;
    public static readonly RULE_parametroArray = 16;
    public static readonly RULE_parametroMatriz = 17;
    public static readonly RULE_comando = 18;
    public static readonly RULE_atribuicao = 19;
    public static readonly RULE_atribuicaoComposta = 20;
    public static readonly RULE_retorne = 21;
    public static readonly RULE_se = 22;
    public static readonly RULE_senao = 23;
    public static readonly RULE_enquanto = 24;
    public static readonly RULE_facaEnquanto = 25;
    public static readonly RULE_para = 26;
    public static readonly RULE_listaComandos = 27;
    public static readonly RULE_inicializacaoPara = 28;
    public static readonly RULE_condicao = 29;
    public static readonly RULE_incrementoPara = 30;
    public static readonly RULE_escolha = 31;
    public static readonly RULE_caso = 32;
    public static readonly RULE_pare = 33;
    public static readonly RULE_indiceArray = 34;
    public static readonly RULE_expressao = 35;
    public static readonly RULE_listaExpressoes = 36;
    public static readonly RULE_listaPropriedades = 37;
    public static readonly RULE_propriedade = 38;
    public static readonly RULE_escopoBiblioteca = 39;

    public static readonly literalNames = [
        null, "'('", "')'", "'['", "']'", "'{'", "'}'", null, "'faca'", 
        "'enquanto'", "'para'", "'se'", "'senao'", "'const'", "'funcao'", 
        "'programa'", "'escolha'", "'caso'", "'contrario'", "'pare'", "'retorne'", 
        "'inclua'", "'biblioteca'", "'nao'", "'e'", "'ou'", "'-'", "'+'", 
        "'*'", "'/'", "'%'", "'='", "'=='", "'!='", "'>'", "'<'", "'<='", 
        "'>='", "'++'", "'--'", "'<<'", "'>>'", "'^'", "'|'", "'~'", "'-->'", 
        "'&'", "'+='", "'-='", "'*='", "'/='", null, "'verdadeiro'", "'falso'", 
        null, null, null, null, null, null, null, null, null, "'.'", "','", 
        "';'", "':'"
    ];

    public static readonly symbolicNames = [
        null, "ABRE_PARENTESES", "FECHA_PARENTESES", "ABRE_COLCHETES", "FECHA_COLCHETES", 
        "ABRE_CHAVES", "FECHA_CHAVES", "TIPO", "FACA", "ENQUANTO", "PARA", 
        "SE", "SENAO", "CONSTANTE", "FUNCAO", "PROGRAMA", "ESCOLHA", "CASO", 
        "CONTRARIO", "PARE", "RETORNE", "INCLUA", "BIBLIOTECA", "OP_NAO", 
        "OP_E_LOGICO", "OP_OU_LOGICO", "OP_SUBTRACAO", "OP_ADICAO", "OP_MULTIPLICACAO", 
        "OP_DIVISAO", "OP_MOD", "OP_ATRIBUICAO", "OP_IGUALDADE", "OP_DIFERENCA", 
        "OP_MAIOR", "OP_MENOR", "OP_MENOR_IGUAL", "OP_MAIOR_IGUAL", "OP_INCREMENTO_UNARIO", 
        "OP_DECREMENTO_UNARIO", "OP_SHIFT_LEFT", "OP_SHIFT_RIGHT", "OP_XOR", 
        "OP_OU_BITWISE", "OP_NOT_BITWISE", "OP_ALIAS_BIBLIOTECA", "E_COMERCIAL", 
        "OP_MAIS_IGUAL", "OP_MENOS_IGUAL", "OP_MULTIPLICACAO_IGUAL", "OP_DIVISAO_IGUAL", 
        "LOGICO", "VERDADEIRO", "FALSO", "CARACTER", "STRING", "ID", "REAL", 
        "INT", "HEXADECIMAL", "COMENTARIO", "COMENTARIO_SIMPLES", "WS", 
        "PONTO", "VIRGULA", "PONTOVIRGULA", "DOISPONTOS"
    ];
    public static readonly ruleNames = [
        "arquivo", "inclusaoBiblioteca", "listaDeclaracoes", "declaracao", 
        "declaracaoVariavel", "declaracaoMatriz", "inicializacaoMatriz", 
        "linhaMatriz", "colunaMatriz", "declaracaoArray", "inicializacaoArray", 
        "tamanhoArray", "declaracaoFuncao", "parametroFuncao", "listaParametros", 
        "parametro", "parametroArray", "parametroMatriz", "comando", "atribuicao", 
        "atribuicaoComposta", "retorne", "se", "senao", "enquanto", "facaEnquanto", 
        "para", "listaComandos", "inicializacaoPara", "condicao", "incrementoPara", 
        "escolha", "caso", "pare", "indiceArray", "expressao", "listaExpressoes", 
        "listaPropriedades", "propriedade", "escopoBiblioteca",
    ];

    public get grammarFileName(): string { return "Portugol.g4"; }
    public get literalNames(): (string | null)[] { return PortugolParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return PortugolParser.symbolicNames; }
    public get ruleNames(): string[] { return PortugolParser.ruleNames; }
    public get serializedATN(): number[] { return PortugolParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, PortugolParser._ATN, PortugolParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public arquivo(): ArquivoContext {
        let localContext = new ArquivoContext(this.context, this.state);
        this.enterRule(localContext, 0, PortugolParser.RULE_arquivo);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 80;
            this.match(PortugolParser.PROGRAMA);
            this.state = 81;
            this.match(PortugolParser.ABRE_CHAVES);
            this.state = 85;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 21) {
                {
                {
                this.state = 82;
                this.inclusaoBiblioteca();
                }
                }
                this.state = 87;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 92;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 24704) !== 0)) {
                {
                this.state = 90;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case PortugolParser.FUNCAO:
                    {
                    this.state = 88;
                    this.declaracaoFuncao();
                    }
                    break;
                case PortugolParser.TIPO:
                case PortugolParser.CONSTANTE:
                    {
                    this.state = 89;
                    this.listaDeclaracoes();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 94;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 95;
            this.match(PortugolParser.FECHA_CHAVES);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inclusaoBiblioteca(): InclusaoBibliotecaContext {
        let localContext = new InclusaoBibliotecaContext(this.context, this.state);
        this.enterRule(localContext, 2, PortugolParser.RULE_inclusaoBiblioteca);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 97;
            this.match(PortugolParser.INCLUA);
            this.state = 98;
            this.match(PortugolParser.BIBLIOTECA);
            this.state = 99;
            this.match(PortugolParser.ID);
            this.state = 102;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 45) {
                {
                this.state = 100;
                this.match(PortugolParser.OP_ALIAS_BIBLIOTECA);
                this.state = 101;
                this.match(PortugolParser.ID);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public listaDeclaracoes(): ListaDeclaracoesContext {
        let localContext = new ListaDeclaracoesContext(this.context, this.state);
        this.enterRule(localContext, 4, PortugolParser.RULE_listaDeclaracoes);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 105;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 13) {
                {
                this.state = 104;
                this.match(PortugolParser.CONSTANTE);
                }
            }

            this.state = 107;
            this.match(PortugolParser.TIPO);
            this.state = 108;
            this.declaracao();
            this.state = 113;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 64) {
                {
                {
                this.state = 109;
                this.match(PortugolParser.VIRGULA);
                this.state = 110;
                this.declaracao();
                }
                }
                this.state = 115;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public declaracao(): DeclaracaoContext {
        let localContext = new DeclaracaoContext(this.context, this.state);
        this.enterRule(localContext, 6, PortugolParser.RULE_declaracao);
        try {
            this.state = 119;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 116;
                this.declaracaoVariavel();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 117;
                this.declaracaoArray();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 118;
                this.declaracaoMatriz();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public declaracaoVariavel(): DeclaracaoVariavelContext {
        let localContext = new DeclaracaoVariavelContext(this.context, this.state);
        this.enterRule(localContext, 8, PortugolParser.RULE_declaracaoVariavel);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 121;
            this.match(PortugolParser.ID);
            this.state = 124;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 31) {
                {
                this.state = 122;
                this.match(PortugolParser.OP_ATRIBUICAO);
                this.state = 123;
                this.expressao(0);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public declaracaoMatriz(): DeclaracaoMatrizContext {
        let localContext = new DeclaracaoMatrizContext(this.context, this.state);
        this.enterRule(localContext, 10, PortugolParser.RULE_declaracaoMatriz);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 126;
            this.match(PortugolParser.ID);
            this.state = 127;
            this.match(PortugolParser.ABRE_COLCHETES);
            this.state = 129;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 209715234) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4137027) !== 0)) {
                {
                this.state = 128;
                this.linhaMatriz();
                }
            }

            this.state = 131;
            this.match(PortugolParser.FECHA_COLCHETES);
            this.state = 132;
            this.match(PortugolParser.ABRE_COLCHETES);
            this.state = 134;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 209715234) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4137027) !== 0)) {
                {
                this.state = 133;
                this.colunaMatriz();
                }
            }

            this.state = 136;
            this.match(PortugolParser.FECHA_COLCHETES);
            this.state = 139;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 31) {
                {
                this.state = 137;
                this.match(PortugolParser.OP_ATRIBUICAO);
                this.state = 138;
                this.inicializacaoMatriz();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inicializacaoMatriz(): InicializacaoMatrizContext {
        let localContext = new InicializacaoMatrizContext(this.context, this.state);
        this.enterRule(localContext, 12, PortugolParser.RULE_inicializacaoMatriz);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 141;
            this.match(PortugolParser.ABRE_CHAVES);
            this.state = 142;
            this.inicializacaoArray();
            this.state = 147;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 64) {
                {
                {
                this.state = 143;
                this.match(PortugolParser.VIRGULA);
                this.state = 144;
                this.inicializacaoArray();
                }
                }
                this.state = 149;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 150;
            this.match(PortugolParser.FECHA_CHAVES);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public linhaMatriz(): LinhaMatrizContext {
        let localContext = new LinhaMatrizContext(this.context, this.state);
        this.enterRule(localContext, 14, PortugolParser.RULE_linhaMatriz);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 152;
            this.tamanhoArray();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public colunaMatriz(): ColunaMatrizContext {
        let localContext = new ColunaMatrizContext(this.context, this.state);
        this.enterRule(localContext, 16, PortugolParser.RULE_colunaMatriz);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 154;
            this.tamanhoArray();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public declaracaoArray(): DeclaracaoArrayContext {
        let localContext = new DeclaracaoArrayContext(this.context, this.state);
        this.enterRule(localContext, 18, PortugolParser.RULE_declaracaoArray);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 156;
            this.match(PortugolParser.ID);
            this.state = 157;
            this.match(PortugolParser.ABRE_COLCHETES);
            this.state = 159;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 209715234) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4137027) !== 0)) {
                {
                this.state = 158;
                this.tamanhoArray();
                }
            }

            this.state = 161;
            this.match(PortugolParser.FECHA_COLCHETES);
            this.state = 164;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 31) {
                {
                this.state = 162;
                this.match(PortugolParser.OP_ATRIBUICAO);
                this.state = 163;
                this.inicializacaoArray();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inicializacaoArray(): InicializacaoArrayContext {
        let localContext = new InicializacaoArrayContext(this.context, this.state);
        this.enterRule(localContext, 20, PortugolParser.RULE_inicializacaoArray);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 166;
            this.match(PortugolParser.ABRE_CHAVES);
            this.state = 168;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 209715234) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4137027) !== 0)) {
                {
                this.state = 167;
                this.listaExpressoes();
                }
            }

            this.state = 170;
            this.match(PortugolParser.FECHA_CHAVES);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tamanhoArray(): TamanhoArrayContext {
        let localContext = new TamanhoArrayContext(this.context, this.state);
        this.enterRule(localContext, 22, PortugolParser.RULE_tamanhoArray);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 172;
            this.expressao(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public declaracaoFuncao(): DeclaracaoFuncaoContext {
        let localContext = new DeclaracaoFuncaoContext(this.context, this.state);
        this.enterRule(localContext, 24, PortugolParser.RULE_declaracaoFuncao);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 174;
            this.match(PortugolParser.FUNCAO);
            this.state = 176;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 7) {
                {
                this.state = 175;
                this.match(PortugolParser.TIPO);
                }
            }

            this.state = 178;
            this.match(PortugolParser.ID);
            this.state = 179;
            this.parametroFuncao();
            this.state = 180;
            this.match(PortugolParser.ABRE_CHAVES);
            this.state = 184;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 211365794) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4137027) !== 0)) {
                {
                {
                this.state = 181;
                this.comando();
                }
                }
                this.state = 186;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 187;
            this.match(PortugolParser.FECHA_CHAVES);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parametroFuncao(): ParametroFuncaoContext {
        let localContext = new ParametroFuncaoContext(this.context, this.state);
        this.enterRule(localContext, 26, PortugolParser.RULE_parametroFuncao);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 189;
            this.match(PortugolParser.ABRE_PARENTESES);
            this.state = 191;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 7) {
                {
                this.state = 190;
                this.listaParametros();
                }
            }

            this.state = 193;
            this.match(PortugolParser.FECHA_PARENTESES);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public listaParametros(): ListaParametrosContext {
        let localContext = new ListaParametrosContext(this.context, this.state);
        this.enterRule(localContext, 28, PortugolParser.RULE_listaParametros);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 195;
            this.parametro();
            this.state = 200;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 64) {
                {
                {
                this.state = 196;
                this.match(PortugolParser.VIRGULA);
                this.state = 197;
                this.parametro();
                }
                }
                this.state = 202;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parametro(): ParametroContext {
        let localContext = new ParametroContext(this.context, this.state);
        this.enterRule(localContext, 30, PortugolParser.RULE_parametro);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 203;
            this.match(PortugolParser.TIPO);
            this.state = 205;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 46) {
                {
                this.state = 204;
                this.match(PortugolParser.E_COMERCIAL);
                }
            }

            this.state = 207;
            this.match(PortugolParser.ID);
            this.state = 210;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
            case 1:
                {
                this.state = 208;
                this.parametroArray();
                }
                break;
            case 2:
                {
                this.state = 209;
                this.parametroMatriz();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parametroArray(): ParametroArrayContext {
        let localContext = new ParametroArrayContext(this.context, this.state);
        this.enterRule(localContext, 32, PortugolParser.RULE_parametroArray);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 212;
            this.match(PortugolParser.ABRE_COLCHETES);
            this.state = 213;
            this.match(PortugolParser.FECHA_COLCHETES);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parametroMatriz(): ParametroMatrizContext {
        let localContext = new ParametroMatrizContext(this.context, this.state);
        this.enterRule(localContext, 34, PortugolParser.RULE_parametroMatriz);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 215;
            this.match(PortugolParser.ABRE_COLCHETES);
            this.state = 216;
            this.match(PortugolParser.FECHA_COLCHETES);
            this.state = 217;
            this.match(PortugolParser.ABRE_COLCHETES);
            this.state = 218;
            this.match(PortugolParser.FECHA_COLCHETES);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public comando(): ComandoContext {
        let localContext = new ComandoContext(this.context, this.state);
        this.enterRule(localContext, 36, PortugolParser.RULE_comando);
        try {
            this.state = 231;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 220;
                this.listaDeclaracoes();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 221;
                this.se();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 222;
                this.enquanto();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 223;
                this.facaEnquanto();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 224;
                this.para();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 225;
                this.escolha();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 226;
                this.retorne();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 227;
                this.pare();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 228;
                this.atribuicao();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 229;
                this.atribuicaoComposta();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 230;
                this.expressao(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public atribuicao(): AtribuicaoContext {
        let localContext = new AtribuicaoContext(this.context, this.state);
        this.enterRule(localContext, 38, PortugolParser.RULE_atribuicao);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 233;
            this.expressao(0);
            this.state = 234;
            this.match(PortugolParser.OP_ATRIBUICAO);
            this.state = 235;
            this.expressao(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public atribuicaoComposta(): AtribuicaoCompostaContext {
        let localContext = new AtribuicaoCompostaContext(this.context, this.state);
        this.enterRule(localContext, 40, PortugolParser.RULE_atribuicaoComposta);
        try {
            this.state = 253;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 22, this.context) ) {
            case 1:
                localContext = new AtribuicaoCompostaSomaContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 237;
                this.expressao(0);
                this.state = 238;
                this.match(PortugolParser.OP_MAIS_IGUAL);
                this.state = 239;
                this.expressao(0);
                }
                break;
            case 2:
                localContext = new AtribuicaoCompostaSubtracaoContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 241;
                this.expressao(0);
                this.state = 242;
                this.match(PortugolParser.OP_MENOS_IGUAL);
                this.state = 243;
                this.expressao(0);
                }
                break;
            case 3:
                localContext = new AtribuicaoCompostaMultiplicacaoContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 245;
                this.expressao(0);
                this.state = 246;
                this.match(PortugolParser.OP_MULTIPLICACAO_IGUAL);
                this.state = 247;
                this.expressao(0);
                }
                break;
            case 4:
                localContext = new AtribuicaoCompostaDivisaoContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 249;
                this.expressao(0);
                this.state = 250;
                this.match(PortugolParser.OP_DIVISAO_IGUAL);
                this.state = 251;
                this.expressao(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public retorne(): RetorneContext {
        let localContext = new RetorneContext(this.context, this.state);
        this.enterRule(localContext, 42, PortugolParser.RULE_retorne);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 255;
            this.match(PortugolParser.RETORNE);
            this.state = 257;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 23, this.context) ) {
            case 1:
                {
                this.state = 256;
                this.expressao(0);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public se(): SeContext {
        let localContext = new SeContext(this.context, this.state);
        this.enterRule(localContext, 44, PortugolParser.RULE_se);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 259;
            this.match(PortugolParser.SE);
            this.state = 260;
            this.match(PortugolParser.ABRE_PARENTESES);
            this.state = 261;
            this.expressao(0);
            this.state = 262;
            this.match(PortugolParser.FECHA_PARENTESES);
            this.state = 263;
            this.listaComandos();
            this.state = 265;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context) ) {
            case 1:
                {
                this.state = 264;
                this.senao();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public senao(): SenaoContext {
        let localContext = new SenaoContext(this.context, this.state);
        this.enterRule(localContext, 46, PortugolParser.RULE_senao);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 267;
            this.match(PortugolParser.SENAO);
            this.state = 268;
            this.listaComandos();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enquanto(): EnquantoContext {
        let localContext = new EnquantoContext(this.context, this.state);
        this.enterRule(localContext, 48, PortugolParser.RULE_enquanto);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 270;
            this.match(PortugolParser.ENQUANTO);
            this.state = 271;
            this.match(PortugolParser.ABRE_PARENTESES);
            this.state = 272;
            this.expressao(0);
            this.state = 273;
            this.match(PortugolParser.FECHA_PARENTESES);
            this.state = 274;
            this.listaComandos();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public facaEnquanto(): FacaEnquantoContext {
        let localContext = new FacaEnquantoContext(this.context, this.state);
        this.enterRule(localContext, 50, PortugolParser.RULE_facaEnquanto);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 276;
            this.match(PortugolParser.FACA);
            this.state = 277;
            this.listaComandos();
            this.state = 278;
            this.match(PortugolParser.ENQUANTO);
            this.state = 279;
            this.match(PortugolParser.ABRE_PARENTESES);
            this.state = 280;
            this.expressao(0);
            this.state = 281;
            this.match(PortugolParser.FECHA_PARENTESES);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public para(): ParaContext {
        let localContext = new ParaContext(this.context, this.state);
        this.enterRule(localContext, 52, PortugolParser.RULE_para);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 283;
            this.match(PortugolParser.PARA);
            this.state = 284;
            this.match(PortugolParser.ABRE_PARENTESES);
            this.state = 286;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 209723554) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4137027) !== 0)) {
                {
                this.state = 285;
                this.inicializacaoPara();
                }
            }

            this.state = 288;
            this.match(PortugolParser.PONTOVIRGULA);
            this.state = 289;
            this.condicao();
            this.state = 290;
            this.match(PortugolParser.PONTOVIRGULA);
            this.state = 291;
            this.incrementoPara();
            this.state = 292;
            this.match(PortugolParser.FECHA_PARENTESES);
            this.state = 293;
            this.listaComandos();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public listaComandos(): ListaComandosContext {
        let localContext = new ListaComandosContext(this.context, this.state);
        this.enterRule(localContext, 54, PortugolParser.RULE_listaComandos);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 304;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 27, this.context) ) {
            case 1:
                {
                this.state = 295;
                this.match(PortugolParser.ABRE_CHAVES);
                this.state = 299;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 211365794) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4137027) !== 0)) {
                    {
                    {
                    this.state = 296;
                    this.comando();
                    }
                    }
                    this.state = 301;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 302;
                this.match(PortugolParser.FECHA_CHAVES);
                }
                break;
            case 2:
                {
                this.state = 303;
                this.comando();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inicializacaoPara(): InicializacaoParaContext {
        let localContext = new InicializacaoParaContext(this.context, this.state);
        this.enterRule(localContext, 56, PortugolParser.RULE_inicializacaoPara);
        try {
            this.state = 309;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 306;
                this.atribuicao();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 307;
                this.listaDeclaracoes();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 308;
                this.match(PortugolParser.ID);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public condicao(): CondicaoContext {
        let localContext = new CondicaoContext(this.context, this.state);
        this.enterRule(localContext, 58, PortugolParser.RULE_condicao);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 311;
            this.expressao(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public incrementoPara(): IncrementoParaContext {
        let localContext = new IncrementoParaContext(this.context, this.state);
        this.enterRule(localContext, 60, PortugolParser.RULE_incrementoPara);
        try {
            this.state = 316;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 29, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 313;
                this.expressao(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 314;
                this.atribuicaoComposta();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 315;
                this.atribuicao();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public escolha(): EscolhaContext {
        let localContext = new EscolhaContext(this.context, this.state);
        this.enterRule(localContext, 62, PortugolParser.RULE_escolha);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 318;
            this.match(PortugolParser.ESCOLHA);
            this.state = 319;
            this.match(PortugolParser.ABRE_PARENTESES);
            this.state = 320;
            this.expressao(0);
            this.state = 321;
            this.match(PortugolParser.FECHA_PARENTESES);
            this.state = 322;
            this.match(PortugolParser.ABRE_CHAVES);
            this.state = 326;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 17) {
                {
                {
                this.state = 323;
                this.caso();
                }
                }
                this.state = 328;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 329;
            this.match(PortugolParser.FECHA_CHAVES);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public caso(): CasoContext {
        let localContext = new CasoContext(this.context, this.state);
        this.enterRule(localContext, 64, PortugolParser.RULE_caso);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 331;
            this.match(PortugolParser.CASO);
            this.state = 334;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case PortugolParser.CONTRARIO:
                {
                this.state = 332;
                this.match(PortugolParser.CONTRARIO);
                }
                break;
            case PortugolParser.ABRE_PARENTESES:
            case PortugolParser.ABRE_CHAVES:
            case PortugolParser.OP_NAO:
            case PortugolParser.OP_SUBTRACAO:
            case PortugolParser.OP_ADICAO:
            case PortugolParser.OP_INCREMENTO_UNARIO:
            case PortugolParser.OP_DECREMENTO_UNARIO:
            case PortugolParser.OP_NOT_BITWISE:
            case PortugolParser.LOGICO:
            case PortugolParser.CARACTER:
            case PortugolParser.STRING:
            case PortugolParser.ID:
            case PortugolParser.REAL:
            case PortugolParser.INT:
            case PortugolParser.HEXADECIMAL:
                {
                this.state = 333;
                this.expressao(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 336;
            this.match(PortugolParser.DOISPONTOS);
            this.state = 351;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 34, this.context) ) {
            case 1:
                {
                this.state = 340;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 32, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 337;
                        this.comando();
                        }
                        }
                    }
                    this.state = 342;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 32, this.context);
                }
                }
                break;
            case 2:
                {
                this.state = 343;
                this.match(PortugolParser.ABRE_CHAVES);
                this.state = 347;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 211365794) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4137027) !== 0)) {
                    {
                    {
                    this.state = 344;
                    this.comando();
                    }
                    }
                    this.state = 349;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 350;
                this.match(PortugolParser.FECHA_CHAVES);
                }
                break;
            }
            this.state = 354;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19) {
                {
                this.state = 353;
                this.pare();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pare(): PareContext {
        let localContext = new PareContext(this.context, this.state);
        this.enterRule(localContext, 66, PortugolParser.RULE_pare);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 356;
            this.match(PortugolParser.PARE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public indiceArray(): IndiceArrayContext {
        let localContext = new IndiceArrayContext(this.context, this.state);
        this.enterRule(localContext, 68, PortugolParser.RULE_indiceArray);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 358;
            this.match(PortugolParser.ABRE_COLCHETES);
            this.state = 359;
            this.expressao(0);
            this.state = 360;
            this.match(PortugolParser.FECHA_COLCHETES);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expressao(): ExpressaoContext;
    public expressao(_p: number): ExpressaoContext;
    public expressao(_p?: number): ExpressaoContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressaoContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 70;
        this.enterRecursionRule(localContext, 70, PortugolParser.RULE_expressao, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 443;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 51, this.context) ) {
            case 1:
                {
                localContext = new ChamadaFuncaoContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 364;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 36, this.context) ) {
                case 1:
                    {
                    this.state = 363;
                    this.escopoBiblioteca();
                    }
                    break;
                }
                this.state = 366;
                this.match(PortugolParser.ID);
                this.state = 367;
                this.match(PortugolParser.ABRE_PARENTESES);
                this.state = 369;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 209715234) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4137027) !== 0)) {
                    {
                    this.state = 368;
                    this.listaExpressoes();
                    }
                }

                this.state = 371;
                this.match(PortugolParser.FECHA_PARENTESES);
                }
                break;
            case 2:
                {
                localContext = new ReferenciaArrayContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 373;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context) ) {
                case 1:
                    {
                    this.state = 372;
                    this.escopoBiblioteca();
                    }
                    break;
                }
                this.state = 375;
                this.match(PortugolParser.ID);
                this.state = 376;
                this.indiceArray();
                }
                break;
            case 3:
                {
                localContext = new ReferenciaMatrizContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 378;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 39, this.context) ) {
                case 1:
                    {
                    this.state = 377;
                    this.escopoBiblioteca();
                    }
                    break;
                }
                this.state = 380;
                this.match(PortugolParser.ID);
                this.state = 381;
                this.indiceArray();
                this.state = 383;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 40, this.context) ) {
                case 1:
                    {
                    this.state = 382;
                    this.indiceArray();
                    }
                    break;
                }
                }
                break;
            case 4:
                {
                localContext = new LiteralObjetoContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 385;
                this.match(PortugolParser.ABRE_CHAVES);
                this.state = 387;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 7) !== 0)) {
                    {
                    this.state = 386;
                    this.listaPropriedades();
                    }
                }

                this.state = 389;
                this.match(PortugolParser.FECHA_CHAVES);
                }
                break;
            case 5:
                {
                localContext = new MenosUnarioContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 390;
                this.match(PortugolParser.OP_SUBTRACAO);
                this.state = 391;
                this.expressao(30);
                }
                break;
            case 6:
                {
                localContext = new MaisUnarioContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 392;
                this.match(PortugolParser.OP_ADICAO);
                this.state = 393;
                this.expressao(29);
                }
                break;
            case 7:
                {
                localContext = new NegacaoContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 394;
                this.match(PortugolParser.OP_NAO);
                this.state = 395;
                this.expressao(28);
                }
                break;
            case 8:
                {
                localContext = new NegacaoBitwiseContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 396;
                this.match(PortugolParser.OP_NOT_BITWISE);
                this.state = 397;
                this.expressao(27);
                }
                break;
            case 9:
                {
                localContext = new IncrementoUnarioPosfixadoContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 398;
                this.match(PortugolParser.ID);
                this.state = 403;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3) {
                    {
                    this.state = 399;
                    this.indiceArray();
                    this.state = 401;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 3) {
                        {
                        this.state = 400;
                        this.indiceArray();
                        }
                    }

                    }
                }

                this.state = 405;
                this.match(PortugolParser.OP_INCREMENTO_UNARIO);
                }
                break;
            case 10:
                {
                localContext = new DecrementoUnarioPosfixadoContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 406;
                this.match(PortugolParser.ID);
                this.state = 411;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3) {
                    {
                    this.state = 407;
                    this.indiceArray();
                    this.state = 409;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 3) {
                        {
                        this.state = 408;
                        this.indiceArray();
                        }
                    }

                    }
                }

                this.state = 413;
                this.match(PortugolParser.OP_DECREMENTO_UNARIO);
                }
                break;
            case 11:
                {
                localContext = new IncrementoUnarioPrefixadoContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 414;
                this.match(PortugolParser.OP_INCREMENTO_UNARIO);
                this.state = 415;
                this.match(PortugolParser.ID);
                this.state = 420;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 47, this.context) ) {
                case 1:
                    {
                    this.state = 416;
                    this.indiceArray();
                    this.state = 418;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 46, this.context) ) {
                    case 1:
                        {
                        this.state = 417;
                        this.indiceArray();
                        }
                        break;
                    }
                    }
                    break;
                }
                }
                break;
            case 12:
                {
                localContext = new DecrementoUnarioPrefixadoContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 422;
                this.match(PortugolParser.OP_DECREMENTO_UNARIO);
                this.state = 423;
                this.match(PortugolParser.ID);
                this.state = 428;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 49, this.context) ) {
                case 1:
                    {
                    this.state = 424;
                    this.indiceArray();
                    this.state = 426;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 48, this.context) ) {
                    case 1:
                        {
                        this.state = 425;
                        this.indiceArray();
                        }
                        break;
                    }
                    }
                    break;
                }
                }
                break;
            case 13:
                {
                localContext = new ReferenciaParaVariavelContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 431;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 50, this.context) ) {
                case 1:
                    {
                    this.state = 430;
                    this.escopoBiblioteca();
                    }
                    break;
                }
                this.state = 433;
                this.match(PortugolParser.ID);
                }
                break;
            case 14:
                {
                localContext = new NumeroInteiroContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 434;
                _la = this.tokenStream.LA(1);
                if(!(_la === 58 || _la === 59)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case 15:
                {
                localContext = new NumeroRealContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 435;
                this.match(PortugolParser.REAL);
                }
                break;
            case 16:
                {
                localContext = new ValorLogicoContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 436;
                this.match(PortugolParser.LOGICO);
                }
                break;
            case 17:
                {
                localContext = new CaracterContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 437;
                this.match(PortugolParser.CARACTER);
                }
                break;
            case 18:
                {
                localContext = new StringContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 438;
                this.match(PortugolParser.STRING);
                }
                break;
            case 19:
                {
                localContext = new ExpressaoEntreParentesesContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 439;
                this.match(PortugolParser.ABRE_PARENTESES);
                this.state = 440;
                this.expressao(0);
                this.state = 441;
                this.match(PortugolParser.FECHA_PARENTESES);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 495;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 53, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 493;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 52, this.context) ) {
                    case 1:
                        {
                        localContext = new MultiplicacaoDivisaoModuloContext(new ExpressaoContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, PortugolParser.RULE_expressao);
                        this.state = 445;
                        if (!(this.precpred(this.context, 22))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 22)");
                        }
                        this.state = 446;
                        (localContext as MultiplicacaoDivisaoModuloContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1879048192) !== 0))) {
                            (localContext as MultiplicacaoDivisaoModuloContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 447;
                        this.expressao(23);
                        }
                        break;
                    case 2:
                        {
                        localContext = new AdicaoSubtracaoContext(new ExpressaoContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, PortugolParser.RULE_expressao);
                        this.state = 448;
                        if (!(this.precpred(this.context, 21))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 21)");
                        }
                        this.state = 449;
                        (localContext as AdicaoSubtracaoContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 26 || _la === 27)) {
                            (localContext as AdicaoSubtracaoContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 450;
                        this.expressao(22);
                        }
                        break;
                    case 3:
                        {
                        localContext = new OperacaoIgualdadeContext(new ExpressaoContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, PortugolParser.RULE_expressao);
                        this.state = 451;
                        if (!(this.precpred(this.context, 20))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 20)");
                        }
                        this.state = 452;
                        this.match(PortugolParser.OP_IGUALDADE);
                        this.state = 453;
                        this.expressao(21);
                        }
                        break;
                    case 4:
                        {
                        localContext = new OperacaoDiferencaContext(new ExpressaoContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, PortugolParser.RULE_expressao);
                        this.state = 454;
                        if (!(this.precpred(this.context, 19))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 19)");
                        }
                        this.state = 455;
                        this.match(PortugolParser.OP_DIFERENCA);
                        this.state = 456;
                        this.expressao(20);
                        }
                        break;
                    case 5:
                        {
                        localContext = new OperacaoMaiorContext(new ExpressaoContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, PortugolParser.RULE_expressao);
                        this.state = 457;
                        if (!(this.precpred(this.context, 18))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 18)");
                        }
                        this.state = 458;
                        this.match(PortugolParser.OP_MAIOR);
                        this.state = 459;
                        this.expressao(19);
                        }
                        break;
                    case 6:
                        {
                        localContext = new OperacaoMenorContext(new ExpressaoContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, PortugolParser.RULE_expressao);
                        this.state = 460;
                        if (!(this.precpred(this.context, 17))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 17)");
                        }
                        this.state = 461;
                        this.match(PortugolParser.OP_MENOR);
                        this.state = 462;
                        this.expressao(18);
                        }
                        break;
                    case 7:
                        {
                        localContext = new OperacaoMenorIgualContext(new ExpressaoContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, PortugolParser.RULE_expressao);
                        this.state = 463;
                        if (!(this.precpred(this.context, 16))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 16)");
                        }
                        this.state = 464;
                        this.match(PortugolParser.OP_MENOR_IGUAL);
                        this.state = 465;
                        this.expressao(17);
                        }
                        break;
                    case 8:
                        {
                        localContext = new OperacaoMaiorIgualContext(new ExpressaoContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, PortugolParser.RULE_expressao);
                        this.state = 466;
                        if (!(this.precpred(this.context, 15))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 15)");
                        }
                        this.state = 467;
                        this.match(PortugolParser.OP_MAIOR_IGUAL);
                        this.state = 468;
                        this.expressao(16);
                        }
                        break;
                    case 9:
                        {
                        localContext = new OperacaoELogicoContext(new ExpressaoContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, PortugolParser.RULE_expressao);
                        this.state = 469;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 470;
                        this.match(PortugolParser.OP_E_LOGICO);
                        this.state = 471;
                        this.expressao(15);
                        }
                        break;
                    case 10:
                        {
                        localContext = new OperacaoOuLogicoContext(new ExpressaoContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, PortugolParser.RULE_expressao);
                        this.state = 472;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 473;
                        this.match(PortugolParser.OP_OU_LOGICO);
                        this.state = 474;
                        this.expressao(14);
                        }
                        break;
                    case 11:
                        {
                        localContext = new OperacaoXorContext(new ExpressaoContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, PortugolParser.RULE_expressao);
                        this.state = 475;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 476;
                        this.match(PortugolParser.OP_XOR);
                        this.state = 477;
                        this.expressao(13);
                        }
                        break;
                    case 12:
                        {
                        localContext = new OperacaoShiftLeftContext(new ExpressaoContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, PortugolParser.RULE_expressao);
                        this.state = 478;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 479;
                        this.match(PortugolParser.OP_SHIFT_LEFT);
                        this.state = 480;
                        this.expressao(12);
                        }
                        break;
                    case 13:
                        {
                        localContext = new OperacaoShiftRightContext(new ExpressaoContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, PortugolParser.RULE_expressao);
                        this.state = 481;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 482;
                        this.match(PortugolParser.OP_SHIFT_RIGHT);
                        this.state = 483;
                        this.expressao(11);
                        }
                        break;
                    case 14:
                        {
                        localContext = new OperacaoAndBitwiseContext(new ExpressaoContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, PortugolParser.RULE_expressao);
                        this.state = 484;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 485;
                        this.match(PortugolParser.E_COMERCIAL);
                        this.state = 486;
                        this.expressao(10);
                        }
                        break;
                    case 15:
                        {
                        localContext = new OperacaoOrBitwiseContext(new ExpressaoContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, PortugolParser.RULE_expressao);
                        this.state = 487;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 488;
                        this.match(PortugolParser.OP_OU_BITWISE);
                        this.state = 489;
                        this.expressao(9);
                        }
                        break;
                    case 16:
                        {
                        localContext = new AcessoPropriedadeContext(new ExpressaoContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, PortugolParser.RULE_expressao);
                        this.state = 490;
                        if (!(this.precpred(this.context, 32))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 32)");
                        }
                        this.state = 491;
                        this.match(PortugolParser.PONTO);
                        this.state = 492;
                        this.match(PortugolParser.ID);
                        }
                        break;
                    }
                    }
                }
                this.state = 497;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 53, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public listaExpressoes(): ListaExpressoesContext {
        let localContext = new ListaExpressoesContext(this.context, this.state);
        this.enterRule(localContext, 72, PortugolParser.RULE_listaExpressoes);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 501;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 54, this.context) ) {
            case 1:
                {
                this.state = 498;
                this.expressao(0);
                }
                break;
            case 2:
                {
                this.state = 499;
                this.atribuicaoComposta();
                }
                break;
            case 3:
                {
                this.state = 500;
                this.atribuicao();
                }
                break;
            }
            this.state = 511;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 64) {
                {
                {
                this.state = 503;
                this.match(PortugolParser.VIRGULA);
                this.state = 507;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context) ) {
                case 1:
                    {
                    this.state = 504;
                    this.expressao(0);
                    }
                    break;
                case 2:
                    {
                    this.state = 505;
                    this.atribuicaoComposta();
                    }
                    break;
                case 3:
                    {
                    this.state = 506;
                    this.atribuicao();
                    }
                    break;
                }
                }
                }
                this.state = 513;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public listaPropriedades(): ListaPropriedadesContext {
        let localContext = new ListaPropriedadesContext(this.context, this.state);
        this.enterRule(localContext, 74, PortugolParser.RULE_listaPropriedades);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 514;
            this.propriedade();
            this.state = 519;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 64) {
                {
                {
                this.state = 515;
                this.match(PortugolParser.VIRGULA);
                this.state = 516;
                this.propriedade();
                }
                }
                this.state = 521;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public propriedade(): PropriedadeContext {
        let localContext = new PropriedadeContext(this.context, this.state);
        this.enterRule(localContext, 76, PortugolParser.RULE_propriedade);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 522;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 7) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 523;
            this.match(PortugolParser.DOISPONTOS);
            this.state = 524;
            this.expressao(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public escopoBiblioteca(): EscopoBibliotecaContext {
        let localContext = new EscopoBibliotecaContext(this.context, this.state);
        this.enterRule(localContext, 78, PortugolParser.RULE_escopoBiblioteca);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 526;
            this.match(PortugolParser.ID);
            this.state = 527;
            this.match(PortugolParser.PONTO);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 35:
            return this.expressao_sempred(localContext as ExpressaoContext, predIndex);
        }
        return true;
    }
    private expressao_sempred(localContext: ExpressaoContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 22);
        case 1:
            return this.precpred(this.context, 21);
        case 2:
            return this.precpred(this.context, 20);
        case 3:
            return this.precpred(this.context, 19);
        case 4:
            return this.precpred(this.context, 18);
        case 5:
            return this.precpred(this.context, 17);
        case 6:
            return this.precpred(this.context, 16);
        case 7:
            return this.precpred(this.context, 15);
        case 8:
            return this.precpred(this.context, 14);
        case 9:
            return this.precpred(this.context, 13);
        case 10:
            return this.precpred(this.context, 12);
        case 11:
            return this.precpred(this.context, 11);
        case 12:
            return this.precpred(this.context, 10);
        case 13:
            return this.precpred(this.context, 9);
        case 14:
            return this.precpred(this.context, 8);
        case 15:
            return this.precpred(this.context, 32);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,66,530,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,
        1,0,1,0,1,0,5,0,84,8,0,10,0,12,0,87,9,0,1,0,1,0,5,0,91,8,0,10,0,
        12,0,94,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,103,8,1,1,2,3,2,106,
        8,2,1,2,1,2,1,2,1,2,5,2,112,8,2,10,2,12,2,115,9,2,1,3,1,3,1,3,3,
        3,120,8,3,1,4,1,4,1,4,3,4,125,8,4,1,5,1,5,1,5,3,5,130,8,5,1,5,1,
        5,1,5,3,5,135,8,5,1,5,1,5,1,5,3,5,140,8,5,1,6,1,6,1,6,1,6,5,6,146,
        8,6,10,6,12,6,149,9,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,9,3,9,160,
        8,9,1,9,1,9,1,9,3,9,165,8,9,1,10,1,10,3,10,169,8,10,1,10,1,10,1,
        11,1,11,1,12,1,12,3,12,177,8,12,1,12,1,12,1,12,1,12,5,12,183,8,12,
        10,12,12,12,186,9,12,1,12,1,12,1,13,1,13,3,13,192,8,13,1,13,1,13,
        1,14,1,14,1,14,5,14,199,8,14,10,14,12,14,202,9,14,1,15,1,15,3,15,
        206,8,15,1,15,1,15,1,15,3,15,211,8,15,1,16,1,16,1,16,1,17,1,17,1,
        17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
        18,3,18,232,8,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,
        20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,254,8,
        20,1,21,1,21,3,21,258,8,21,1,22,1,22,1,22,1,22,1,22,1,22,3,22,266,
        8,22,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,
        1,25,1,25,1,25,1,25,1,26,1,26,1,26,3,26,287,8,26,1,26,1,26,1,26,
        1,26,1,26,1,26,1,26,1,27,1,27,5,27,298,8,27,10,27,12,27,301,9,27,
        1,27,1,27,3,27,305,8,27,1,28,1,28,1,28,3,28,310,8,28,1,29,1,29,1,
        30,1,30,1,30,3,30,317,8,30,1,31,1,31,1,31,1,31,1,31,1,31,5,31,325,
        8,31,10,31,12,31,328,9,31,1,31,1,31,1,32,1,32,1,32,3,32,335,8,32,
        1,32,1,32,5,32,339,8,32,10,32,12,32,342,9,32,1,32,1,32,5,32,346,
        8,32,10,32,12,32,349,9,32,1,32,3,32,352,8,32,1,32,3,32,355,8,32,
        1,33,1,33,1,34,1,34,1,34,1,34,1,35,1,35,3,35,365,8,35,1,35,1,35,
        1,35,3,35,370,8,35,1,35,1,35,3,35,374,8,35,1,35,1,35,1,35,3,35,379,
        8,35,1,35,1,35,1,35,3,35,384,8,35,1,35,1,35,3,35,388,8,35,1,35,1,
        35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,402,8,
        35,3,35,404,8,35,1,35,1,35,1,35,1,35,3,35,410,8,35,3,35,412,8,35,
        1,35,1,35,1,35,1,35,1,35,3,35,419,8,35,3,35,421,8,35,1,35,1,35,1,
        35,1,35,3,35,427,8,35,3,35,429,8,35,1,35,3,35,432,8,35,1,35,1,35,
        1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,444,8,35,1,35,1,35,
        1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
        1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
        1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
        1,35,1,35,1,35,1,35,1,35,1,35,1,35,5,35,494,8,35,10,35,12,35,497,
        9,35,1,36,1,36,1,36,3,36,502,8,36,1,36,1,36,1,36,1,36,3,36,508,8,
        36,5,36,510,8,36,10,36,12,36,513,9,36,1,37,1,37,1,37,5,37,518,8,
        37,10,37,12,37,521,9,37,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,
        0,1,70,40,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
        40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,0,4,
        1,0,58,59,1,0,28,30,1,0,26,27,1,0,54,56,595,0,80,1,0,0,0,2,97,1,
        0,0,0,4,105,1,0,0,0,6,119,1,0,0,0,8,121,1,0,0,0,10,126,1,0,0,0,12,
        141,1,0,0,0,14,152,1,0,0,0,16,154,1,0,0,0,18,156,1,0,0,0,20,166,
        1,0,0,0,22,172,1,0,0,0,24,174,1,0,0,0,26,189,1,0,0,0,28,195,1,0,
        0,0,30,203,1,0,0,0,32,212,1,0,0,0,34,215,1,0,0,0,36,231,1,0,0,0,
        38,233,1,0,0,0,40,253,1,0,0,0,42,255,1,0,0,0,44,259,1,0,0,0,46,267,
        1,0,0,0,48,270,1,0,0,0,50,276,1,0,0,0,52,283,1,0,0,0,54,304,1,0,
        0,0,56,309,1,0,0,0,58,311,1,0,0,0,60,316,1,0,0,0,62,318,1,0,0,0,
        64,331,1,0,0,0,66,356,1,0,0,0,68,358,1,0,0,0,70,443,1,0,0,0,72,501,
        1,0,0,0,74,514,1,0,0,0,76,522,1,0,0,0,78,526,1,0,0,0,80,81,5,15,
        0,0,81,85,5,5,0,0,82,84,3,2,1,0,83,82,1,0,0,0,84,87,1,0,0,0,85,83,
        1,0,0,0,85,86,1,0,0,0,86,92,1,0,0,0,87,85,1,0,0,0,88,91,3,24,12,
        0,89,91,3,4,2,0,90,88,1,0,0,0,90,89,1,0,0,0,91,94,1,0,0,0,92,90,
        1,0,0,0,92,93,1,0,0,0,93,95,1,0,0,0,94,92,1,0,0,0,95,96,5,6,0,0,
        96,1,1,0,0,0,97,98,5,21,0,0,98,99,5,22,0,0,99,102,5,56,0,0,100,101,
        5,45,0,0,101,103,5,56,0,0,102,100,1,0,0,0,102,103,1,0,0,0,103,3,
        1,0,0,0,104,106,5,13,0,0,105,104,1,0,0,0,105,106,1,0,0,0,106,107,
        1,0,0,0,107,108,5,7,0,0,108,113,3,6,3,0,109,110,5,64,0,0,110,112,
        3,6,3,0,111,109,1,0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,113,114,
        1,0,0,0,114,5,1,0,0,0,115,113,1,0,0,0,116,120,3,8,4,0,117,120,3,
        18,9,0,118,120,3,10,5,0,119,116,1,0,0,0,119,117,1,0,0,0,119,118,
        1,0,0,0,120,7,1,0,0,0,121,124,5,56,0,0,122,123,5,31,0,0,123,125,
        3,70,35,0,124,122,1,0,0,0,124,125,1,0,0,0,125,9,1,0,0,0,126,127,
        5,56,0,0,127,129,5,3,0,0,128,130,3,14,7,0,129,128,1,0,0,0,129,130,
        1,0,0,0,130,131,1,0,0,0,131,132,5,4,0,0,132,134,5,3,0,0,133,135,
        3,16,8,0,134,133,1,0,0,0,134,135,1,0,0,0,135,136,1,0,0,0,136,139,
        5,4,0,0,137,138,5,31,0,0,138,140,3,12,6,0,139,137,1,0,0,0,139,140,
        1,0,0,0,140,11,1,0,0,0,141,142,5,5,0,0,142,147,3,20,10,0,143,144,
        5,64,0,0,144,146,3,20,10,0,145,143,1,0,0,0,146,149,1,0,0,0,147,145,
        1,0,0,0,147,148,1,0,0,0,148,150,1,0,0,0,149,147,1,0,0,0,150,151,
        5,6,0,0,151,13,1,0,0,0,152,153,3,22,11,0,153,15,1,0,0,0,154,155,
        3,22,11,0,155,17,1,0,0,0,156,157,5,56,0,0,157,159,5,3,0,0,158,160,
        3,22,11,0,159,158,1,0,0,0,159,160,1,0,0,0,160,161,1,0,0,0,161,164,
        5,4,0,0,162,163,5,31,0,0,163,165,3,20,10,0,164,162,1,0,0,0,164,165,
        1,0,0,0,165,19,1,0,0,0,166,168,5,5,0,0,167,169,3,72,36,0,168,167,
        1,0,0,0,168,169,1,0,0,0,169,170,1,0,0,0,170,171,5,6,0,0,171,21,1,
        0,0,0,172,173,3,70,35,0,173,23,1,0,0,0,174,176,5,14,0,0,175,177,
        5,7,0,0,176,175,1,0,0,0,176,177,1,0,0,0,177,178,1,0,0,0,178,179,
        5,56,0,0,179,180,3,26,13,0,180,184,5,5,0,0,181,183,3,36,18,0,182,
        181,1,0,0,0,183,186,1,0,0,0,184,182,1,0,0,0,184,185,1,0,0,0,185,
        187,1,0,0,0,186,184,1,0,0,0,187,188,5,6,0,0,188,25,1,0,0,0,189,191,
        5,1,0,0,190,192,3,28,14,0,191,190,1,0,0,0,191,192,1,0,0,0,192,193,
        1,0,0,0,193,194,5,2,0,0,194,27,1,0,0,0,195,200,3,30,15,0,196,197,
        5,64,0,0,197,199,3,30,15,0,198,196,1,0,0,0,199,202,1,0,0,0,200,198,
        1,0,0,0,200,201,1,0,0,0,201,29,1,0,0,0,202,200,1,0,0,0,203,205,5,
        7,0,0,204,206,5,46,0,0,205,204,1,0,0,0,205,206,1,0,0,0,206,207,1,
        0,0,0,207,210,5,56,0,0,208,211,3,32,16,0,209,211,3,34,17,0,210,208,
        1,0,0,0,210,209,1,0,0,0,210,211,1,0,0,0,211,31,1,0,0,0,212,213,5,
        3,0,0,213,214,5,4,0,0,214,33,1,0,0,0,215,216,5,3,0,0,216,217,5,4,
        0,0,217,218,5,3,0,0,218,219,5,4,0,0,219,35,1,0,0,0,220,232,3,4,2,
        0,221,232,3,44,22,0,222,232,3,48,24,0,223,232,3,50,25,0,224,232,
        3,52,26,0,225,232,3,62,31,0,226,232,3,42,21,0,227,232,3,66,33,0,
        228,232,3,38,19,0,229,232,3,40,20,0,230,232,3,70,35,0,231,220,1,
        0,0,0,231,221,1,0,0,0,231,222,1,0,0,0,231,223,1,0,0,0,231,224,1,
        0,0,0,231,225,1,0,0,0,231,226,1,0,0,0,231,227,1,0,0,0,231,228,1,
        0,0,0,231,229,1,0,0,0,231,230,1,0,0,0,232,37,1,0,0,0,233,234,3,70,
        35,0,234,235,5,31,0,0,235,236,3,70,35,0,236,39,1,0,0,0,237,238,3,
        70,35,0,238,239,5,47,0,0,239,240,3,70,35,0,240,254,1,0,0,0,241,242,
        3,70,35,0,242,243,5,48,0,0,243,244,3,70,35,0,244,254,1,0,0,0,245,
        246,3,70,35,0,246,247,5,49,0,0,247,248,3,70,35,0,248,254,1,0,0,0,
        249,250,3,70,35,0,250,251,5,50,0,0,251,252,3,70,35,0,252,254,1,0,
        0,0,253,237,1,0,0,0,253,241,1,0,0,0,253,245,1,0,0,0,253,249,1,0,
        0,0,254,41,1,0,0,0,255,257,5,20,0,0,256,258,3,70,35,0,257,256,1,
        0,0,0,257,258,1,0,0,0,258,43,1,0,0,0,259,260,5,11,0,0,260,261,5,
        1,0,0,261,262,3,70,35,0,262,263,5,2,0,0,263,265,3,54,27,0,264,266,
        3,46,23,0,265,264,1,0,0,0,265,266,1,0,0,0,266,45,1,0,0,0,267,268,
        5,12,0,0,268,269,3,54,27,0,269,47,1,0,0,0,270,271,5,9,0,0,271,272,
        5,1,0,0,272,273,3,70,35,0,273,274,5,2,0,0,274,275,3,54,27,0,275,
        49,1,0,0,0,276,277,5,8,0,0,277,278,3,54,27,0,278,279,5,9,0,0,279,
        280,5,1,0,0,280,281,3,70,35,0,281,282,5,2,0,0,282,51,1,0,0,0,283,
        284,5,10,0,0,284,286,5,1,0,0,285,287,3,56,28,0,286,285,1,0,0,0,286,
        287,1,0,0,0,287,288,1,0,0,0,288,289,5,65,0,0,289,290,3,58,29,0,290,
        291,5,65,0,0,291,292,3,60,30,0,292,293,5,2,0,0,293,294,3,54,27,0,
        294,53,1,0,0,0,295,299,5,5,0,0,296,298,3,36,18,0,297,296,1,0,0,0,
        298,301,1,0,0,0,299,297,1,0,0,0,299,300,1,0,0,0,300,302,1,0,0,0,
        301,299,1,0,0,0,302,305,5,6,0,0,303,305,3,36,18,0,304,295,1,0,0,
        0,304,303,1,0,0,0,305,55,1,0,0,0,306,310,3,38,19,0,307,310,3,4,2,
        0,308,310,5,56,0,0,309,306,1,0,0,0,309,307,1,0,0,0,309,308,1,0,0,
        0,310,57,1,0,0,0,311,312,3,70,35,0,312,59,1,0,0,0,313,317,3,70,35,
        0,314,317,3,40,20,0,315,317,3,38,19,0,316,313,1,0,0,0,316,314,1,
        0,0,0,316,315,1,0,0,0,317,61,1,0,0,0,318,319,5,16,0,0,319,320,5,
        1,0,0,320,321,3,70,35,0,321,322,5,2,0,0,322,326,5,5,0,0,323,325,
        3,64,32,0,324,323,1,0,0,0,325,328,1,0,0,0,326,324,1,0,0,0,326,327,
        1,0,0,0,327,329,1,0,0,0,328,326,1,0,0,0,329,330,5,6,0,0,330,63,1,
        0,0,0,331,334,5,17,0,0,332,335,5,18,0,0,333,335,3,70,35,0,334,332,
        1,0,0,0,334,333,1,0,0,0,335,336,1,0,0,0,336,351,5,66,0,0,337,339,
        3,36,18,0,338,337,1,0,0,0,339,342,1,0,0,0,340,338,1,0,0,0,340,341,
        1,0,0,0,341,352,1,0,0,0,342,340,1,0,0,0,343,347,5,5,0,0,344,346,
        3,36,18,0,345,344,1,0,0,0,346,349,1,0,0,0,347,345,1,0,0,0,347,348,
        1,0,0,0,348,350,1,0,0,0,349,347,1,0,0,0,350,352,5,6,0,0,351,340,
        1,0,0,0,351,343,1,0,0,0,352,354,1,0,0,0,353,355,3,66,33,0,354,353,
        1,0,0,0,354,355,1,0,0,0,355,65,1,0,0,0,356,357,5,19,0,0,357,67,1,
        0,0,0,358,359,5,3,0,0,359,360,3,70,35,0,360,361,5,4,0,0,361,69,1,
        0,0,0,362,364,6,35,-1,0,363,365,3,78,39,0,364,363,1,0,0,0,364,365,
        1,0,0,0,365,366,1,0,0,0,366,367,5,56,0,0,367,369,5,1,0,0,368,370,
        3,72,36,0,369,368,1,0,0,0,369,370,1,0,0,0,370,371,1,0,0,0,371,444,
        5,2,0,0,372,374,3,78,39,0,373,372,1,0,0,0,373,374,1,0,0,0,374,375,
        1,0,0,0,375,376,5,56,0,0,376,444,3,68,34,0,377,379,3,78,39,0,378,
        377,1,0,0,0,378,379,1,0,0,0,379,380,1,0,0,0,380,381,5,56,0,0,381,
        383,3,68,34,0,382,384,3,68,34,0,383,382,1,0,0,0,383,384,1,0,0,0,
        384,444,1,0,0,0,385,387,5,5,0,0,386,388,3,74,37,0,387,386,1,0,0,
        0,387,388,1,0,0,0,388,389,1,0,0,0,389,444,5,6,0,0,390,391,5,26,0,
        0,391,444,3,70,35,30,392,393,5,27,0,0,393,444,3,70,35,29,394,395,
        5,23,0,0,395,444,3,70,35,28,396,397,5,44,0,0,397,444,3,70,35,27,
        398,403,5,56,0,0,399,401,3,68,34,0,400,402,3,68,34,0,401,400,1,0,
        0,0,401,402,1,0,0,0,402,404,1,0,0,0,403,399,1,0,0,0,403,404,1,0,
        0,0,404,405,1,0,0,0,405,444,5,38,0,0,406,411,5,56,0,0,407,409,3,
        68,34,0,408,410,3,68,34,0,409,408,1,0,0,0,409,410,1,0,0,0,410,412,
        1,0,0,0,411,407,1,0,0,0,411,412,1,0,0,0,412,413,1,0,0,0,413,444,
        5,39,0,0,414,415,5,38,0,0,415,420,5,56,0,0,416,418,3,68,34,0,417,
        419,3,68,34,0,418,417,1,0,0,0,418,419,1,0,0,0,419,421,1,0,0,0,420,
        416,1,0,0,0,420,421,1,0,0,0,421,444,1,0,0,0,422,423,5,39,0,0,423,
        428,5,56,0,0,424,426,3,68,34,0,425,427,3,68,34,0,426,425,1,0,0,0,
        426,427,1,0,0,0,427,429,1,0,0,0,428,424,1,0,0,0,428,429,1,0,0,0,
        429,444,1,0,0,0,430,432,3,78,39,0,431,430,1,0,0,0,431,432,1,0,0,
        0,432,433,1,0,0,0,433,444,5,56,0,0,434,444,7,0,0,0,435,444,5,57,
        0,0,436,444,5,51,0,0,437,444,5,54,0,0,438,444,5,55,0,0,439,440,5,
        1,0,0,440,441,3,70,35,0,441,442,5,2,0,0,442,444,1,0,0,0,443,362,
        1,0,0,0,443,373,1,0,0,0,443,378,1,0,0,0,443,385,1,0,0,0,443,390,
        1,0,0,0,443,392,1,0,0,0,443,394,1,0,0,0,443,396,1,0,0,0,443,398,
        1,0,0,0,443,406,1,0,0,0,443,414,1,0,0,0,443,422,1,0,0,0,443,431,
        1,0,0,0,443,434,1,0,0,0,443,435,1,0,0,0,443,436,1,0,0,0,443,437,
        1,0,0,0,443,438,1,0,0,0,443,439,1,0,0,0,444,495,1,0,0,0,445,446,
        10,22,0,0,446,447,7,1,0,0,447,494,3,70,35,23,448,449,10,21,0,0,449,
        450,7,2,0,0,450,494,3,70,35,22,451,452,10,20,0,0,452,453,5,32,0,
        0,453,494,3,70,35,21,454,455,10,19,0,0,455,456,5,33,0,0,456,494,
        3,70,35,20,457,458,10,18,0,0,458,459,5,34,0,0,459,494,3,70,35,19,
        460,461,10,17,0,0,461,462,5,35,0,0,462,494,3,70,35,18,463,464,10,
        16,0,0,464,465,5,36,0,0,465,494,3,70,35,17,466,467,10,15,0,0,467,
        468,5,37,0,0,468,494,3,70,35,16,469,470,10,14,0,0,470,471,5,24,0,
        0,471,494,3,70,35,15,472,473,10,13,0,0,473,474,5,25,0,0,474,494,
        3,70,35,14,475,476,10,12,0,0,476,477,5,42,0,0,477,494,3,70,35,13,
        478,479,10,11,0,0,479,480,5,40,0,0,480,494,3,70,35,12,481,482,10,
        10,0,0,482,483,5,41,0,0,483,494,3,70,35,11,484,485,10,9,0,0,485,
        486,5,46,0,0,486,494,3,70,35,10,487,488,10,8,0,0,488,489,5,43,0,
        0,489,494,3,70,35,9,490,491,10,32,0,0,491,492,5,63,0,0,492,494,5,
        56,0,0,493,445,1,0,0,0,493,448,1,0,0,0,493,451,1,0,0,0,493,454,1,
        0,0,0,493,457,1,0,0,0,493,460,1,0,0,0,493,463,1,0,0,0,493,466,1,
        0,0,0,493,469,1,0,0,0,493,472,1,0,0,0,493,475,1,0,0,0,493,478,1,
        0,0,0,493,481,1,0,0,0,493,484,1,0,0,0,493,487,1,0,0,0,493,490,1,
        0,0,0,494,497,1,0,0,0,495,493,1,0,0,0,495,496,1,0,0,0,496,71,1,0,
        0,0,497,495,1,0,0,0,498,502,3,70,35,0,499,502,3,40,20,0,500,502,
        3,38,19,0,501,498,1,0,0,0,501,499,1,0,0,0,501,500,1,0,0,0,502,511,
        1,0,0,0,503,507,5,64,0,0,504,508,3,70,35,0,505,508,3,40,20,0,506,
        508,3,38,19,0,507,504,1,0,0,0,507,505,1,0,0,0,507,506,1,0,0,0,508,
        510,1,0,0,0,509,503,1,0,0,0,510,513,1,0,0,0,511,509,1,0,0,0,511,
        512,1,0,0,0,512,73,1,0,0,0,513,511,1,0,0,0,514,519,3,76,38,0,515,
        516,5,64,0,0,516,518,3,76,38,0,517,515,1,0,0,0,518,521,1,0,0,0,519,
        517,1,0,0,0,519,520,1,0,0,0,520,75,1,0,0,0,521,519,1,0,0,0,522,523,
        7,3,0,0,523,524,5,66,0,0,524,525,3,70,35,0,525,77,1,0,0,0,526,527,
        5,56,0,0,527,528,5,63,0,0,528,79,1,0,0,0,58,85,90,92,102,105,113,
        119,124,129,134,139,147,159,164,168,176,184,191,200,205,210,231,
        253,257,265,286,299,304,309,316,326,334,340,347,351,354,364,369,
        373,378,383,387,401,403,409,411,418,420,426,428,431,443,493,495,
        501,507,511,519
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!PortugolParser.__ATN) {
            PortugolParser.__ATN = new antlr.ATNDeserializer().deserialize(PortugolParser._serializedATN);
        }

        return PortugolParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(PortugolParser.literalNames, PortugolParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return PortugolParser.vocabulary;
    }

    private static readonly decisionsToDFA = PortugolParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ArquivoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PROGRAMA(): antlr.TerminalNode {
        return this.getToken(PortugolParser.PROGRAMA, 0)!;
    }
    public ABRE_CHAVES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ABRE_CHAVES, 0)!;
    }
    public FECHA_CHAVES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.FECHA_CHAVES, 0)!;
    }
    public inclusaoBiblioteca(): InclusaoBibliotecaContext[];
    public inclusaoBiblioteca(i: number): InclusaoBibliotecaContext | null;
    public inclusaoBiblioteca(i?: number): InclusaoBibliotecaContext[] | InclusaoBibliotecaContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InclusaoBibliotecaContext);
        }

        return this.getRuleContext(i, InclusaoBibliotecaContext);
    }
    public declaracaoFuncao(): DeclaracaoFuncaoContext[];
    public declaracaoFuncao(i: number): DeclaracaoFuncaoContext | null;
    public declaracaoFuncao(i?: number): DeclaracaoFuncaoContext[] | DeclaracaoFuncaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DeclaracaoFuncaoContext);
        }

        return this.getRuleContext(i, DeclaracaoFuncaoContext);
    }
    public listaDeclaracoes(): ListaDeclaracoesContext[];
    public listaDeclaracoes(i: number): ListaDeclaracoesContext | null;
    public listaDeclaracoes(i?: number): ListaDeclaracoesContext[] | ListaDeclaracoesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ListaDeclaracoesContext);
        }

        return this.getRuleContext(i, ListaDeclaracoesContext);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_arquivo;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterArquivo) {
             listener.enterArquivo(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitArquivo) {
             listener.exitArquivo(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitArquivo) {
            return visitor.visitArquivo(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InclusaoBibliotecaContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INCLUA(): antlr.TerminalNode {
        return this.getToken(PortugolParser.INCLUA, 0)!;
    }
    public BIBLIOTECA(): antlr.TerminalNode {
        return this.getToken(PortugolParser.BIBLIOTECA, 0)!;
    }
    public ID(): antlr.TerminalNode[];
    public ID(i: number): antlr.TerminalNode | null;
    public ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PortugolParser.ID);
    	} else {
    		return this.getToken(PortugolParser.ID, i);
    	}
    }
    public OP_ALIAS_BIBLIOTECA(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.OP_ALIAS_BIBLIOTECA, 0);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_inclusaoBiblioteca;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterInclusaoBiblioteca) {
             listener.enterInclusaoBiblioteca(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitInclusaoBiblioteca) {
             listener.exitInclusaoBiblioteca(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitInclusaoBiblioteca) {
            return visitor.visitInclusaoBiblioteca(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ListaDeclaracoesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TIPO(): antlr.TerminalNode {
        return this.getToken(PortugolParser.TIPO, 0)!;
    }
    public declaracao(): DeclaracaoContext[];
    public declaracao(i: number): DeclaracaoContext | null;
    public declaracao(i?: number): DeclaracaoContext[] | DeclaracaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DeclaracaoContext);
        }

        return this.getRuleContext(i, DeclaracaoContext);
    }
    public CONSTANTE(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.CONSTANTE, 0);
    }
    public VIRGULA(): antlr.TerminalNode[];
    public VIRGULA(i: number): antlr.TerminalNode | null;
    public VIRGULA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PortugolParser.VIRGULA);
    	} else {
    		return this.getToken(PortugolParser.VIRGULA, i);
    	}
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_listaDeclaracoes;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterListaDeclaracoes) {
             listener.enterListaDeclaracoes(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitListaDeclaracoes) {
             listener.exitListaDeclaracoes(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitListaDeclaracoes) {
            return visitor.visitListaDeclaracoes(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DeclaracaoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public declaracaoVariavel(): DeclaracaoVariavelContext | null {
        return this.getRuleContext(0, DeclaracaoVariavelContext);
    }
    public declaracaoArray(): DeclaracaoArrayContext | null {
        return this.getRuleContext(0, DeclaracaoArrayContext);
    }
    public declaracaoMatriz(): DeclaracaoMatrizContext | null {
        return this.getRuleContext(0, DeclaracaoMatrizContext);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_declaracao;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterDeclaracao) {
             listener.enterDeclaracao(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitDeclaracao) {
             listener.exitDeclaracao(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitDeclaracao) {
            return visitor.visitDeclaracao(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DeclaracaoVariavelContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ID, 0)!;
    }
    public OP_ATRIBUICAO(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.OP_ATRIBUICAO, 0);
    }
    public expressao(): ExpressaoContext | null {
        return this.getRuleContext(0, ExpressaoContext);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_declaracaoVariavel;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterDeclaracaoVariavel) {
             listener.enterDeclaracaoVariavel(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitDeclaracaoVariavel) {
             listener.exitDeclaracaoVariavel(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitDeclaracaoVariavel) {
            return visitor.visitDeclaracaoVariavel(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DeclaracaoMatrizContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ID, 0)!;
    }
    public ABRE_COLCHETES(): antlr.TerminalNode[];
    public ABRE_COLCHETES(i: number): antlr.TerminalNode | null;
    public ABRE_COLCHETES(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PortugolParser.ABRE_COLCHETES);
    	} else {
    		return this.getToken(PortugolParser.ABRE_COLCHETES, i);
    	}
    }
    public FECHA_COLCHETES(): antlr.TerminalNode[];
    public FECHA_COLCHETES(i: number): antlr.TerminalNode | null;
    public FECHA_COLCHETES(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PortugolParser.FECHA_COLCHETES);
    	} else {
    		return this.getToken(PortugolParser.FECHA_COLCHETES, i);
    	}
    }
    public linhaMatriz(): LinhaMatrizContext | null {
        return this.getRuleContext(0, LinhaMatrizContext);
    }
    public colunaMatriz(): ColunaMatrizContext | null {
        return this.getRuleContext(0, ColunaMatrizContext);
    }
    public OP_ATRIBUICAO(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.OP_ATRIBUICAO, 0);
    }
    public inicializacaoMatriz(): InicializacaoMatrizContext | null {
        return this.getRuleContext(0, InicializacaoMatrizContext);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_declaracaoMatriz;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterDeclaracaoMatriz) {
             listener.enterDeclaracaoMatriz(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitDeclaracaoMatriz) {
             listener.exitDeclaracaoMatriz(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitDeclaracaoMatriz) {
            return visitor.visitDeclaracaoMatriz(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InicializacaoMatrizContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ABRE_CHAVES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ABRE_CHAVES, 0)!;
    }
    public inicializacaoArray(): InicializacaoArrayContext[];
    public inicializacaoArray(i: number): InicializacaoArrayContext | null;
    public inicializacaoArray(i?: number): InicializacaoArrayContext[] | InicializacaoArrayContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InicializacaoArrayContext);
        }

        return this.getRuleContext(i, InicializacaoArrayContext);
    }
    public FECHA_CHAVES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.FECHA_CHAVES, 0)!;
    }
    public VIRGULA(): antlr.TerminalNode[];
    public VIRGULA(i: number): antlr.TerminalNode | null;
    public VIRGULA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PortugolParser.VIRGULA);
    	} else {
    		return this.getToken(PortugolParser.VIRGULA, i);
    	}
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_inicializacaoMatriz;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterInicializacaoMatriz) {
             listener.enterInicializacaoMatriz(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitInicializacaoMatriz) {
             listener.exitInicializacaoMatriz(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitInicializacaoMatriz) {
            return visitor.visitInicializacaoMatriz(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LinhaMatrizContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tamanhoArray(): TamanhoArrayContext {
        return this.getRuleContext(0, TamanhoArrayContext)!;
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_linhaMatriz;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterLinhaMatriz) {
             listener.enterLinhaMatriz(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitLinhaMatriz) {
             listener.exitLinhaMatriz(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitLinhaMatriz) {
            return visitor.visitLinhaMatriz(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColunaMatrizContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tamanhoArray(): TamanhoArrayContext {
        return this.getRuleContext(0, TamanhoArrayContext)!;
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_colunaMatriz;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterColunaMatriz) {
             listener.enterColunaMatriz(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitColunaMatriz) {
             listener.exitColunaMatriz(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitColunaMatriz) {
            return visitor.visitColunaMatriz(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DeclaracaoArrayContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ID, 0)!;
    }
    public ABRE_COLCHETES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ABRE_COLCHETES, 0)!;
    }
    public FECHA_COLCHETES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.FECHA_COLCHETES, 0)!;
    }
    public tamanhoArray(): TamanhoArrayContext | null {
        return this.getRuleContext(0, TamanhoArrayContext);
    }
    public OP_ATRIBUICAO(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.OP_ATRIBUICAO, 0);
    }
    public inicializacaoArray(): InicializacaoArrayContext | null {
        return this.getRuleContext(0, InicializacaoArrayContext);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_declaracaoArray;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterDeclaracaoArray) {
             listener.enterDeclaracaoArray(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitDeclaracaoArray) {
             listener.exitDeclaracaoArray(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitDeclaracaoArray) {
            return visitor.visitDeclaracaoArray(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InicializacaoArrayContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ABRE_CHAVES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ABRE_CHAVES, 0)!;
    }
    public FECHA_CHAVES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.FECHA_CHAVES, 0)!;
    }
    public listaExpressoes(): ListaExpressoesContext | null {
        return this.getRuleContext(0, ListaExpressoesContext);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_inicializacaoArray;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterInicializacaoArray) {
             listener.enterInicializacaoArray(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitInicializacaoArray) {
             listener.exitInicializacaoArray(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitInicializacaoArray) {
            return visitor.visitInicializacaoArray(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TamanhoArrayContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expressao(): ExpressaoContext {
        return this.getRuleContext(0, ExpressaoContext)!;
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_tamanhoArray;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterTamanhoArray) {
             listener.enterTamanhoArray(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitTamanhoArray) {
             listener.exitTamanhoArray(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitTamanhoArray) {
            return visitor.visitTamanhoArray(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DeclaracaoFuncaoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FUNCAO(): antlr.TerminalNode {
        return this.getToken(PortugolParser.FUNCAO, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ID, 0)!;
    }
    public parametroFuncao(): ParametroFuncaoContext {
        return this.getRuleContext(0, ParametroFuncaoContext)!;
    }
    public ABRE_CHAVES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ABRE_CHAVES, 0)!;
    }
    public FECHA_CHAVES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.FECHA_CHAVES, 0)!;
    }
    public TIPO(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.TIPO, 0);
    }
    public comando(): ComandoContext[];
    public comando(i: number): ComandoContext | null;
    public comando(i?: number): ComandoContext[] | ComandoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ComandoContext);
        }

        return this.getRuleContext(i, ComandoContext);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_declaracaoFuncao;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterDeclaracaoFuncao) {
             listener.enterDeclaracaoFuncao(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitDeclaracaoFuncao) {
             listener.exitDeclaracaoFuncao(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitDeclaracaoFuncao) {
            return visitor.visitDeclaracaoFuncao(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParametroFuncaoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ABRE_PARENTESES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ABRE_PARENTESES, 0)!;
    }
    public FECHA_PARENTESES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.FECHA_PARENTESES, 0)!;
    }
    public listaParametros(): ListaParametrosContext | null {
        return this.getRuleContext(0, ListaParametrosContext);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_parametroFuncao;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterParametroFuncao) {
             listener.enterParametroFuncao(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitParametroFuncao) {
             listener.exitParametroFuncao(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitParametroFuncao) {
            return visitor.visitParametroFuncao(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ListaParametrosContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public parametro(): ParametroContext[];
    public parametro(i: number): ParametroContext | null;
    public parametro(i?: number): ParametroContext[] | ParametroContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParametroContext);
        }

        return this.getRuleContext(i, ParametroContext);
    }
    public VIRGULA(): antlr.TerminalNode[];
    public VIRGULA(i: number): antlr.TerminalNode | null;
    public VIRGULA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PortugolParser.VIRGULA);
    	} else {
    		return this.getToken(PortugolParser.VIRGULA, i);
    	}
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_listaParametros;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterListaParametros) {
             listener.enterListaParametros(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitListaParametros) {
             listener.exitListaParametros(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitListaParametros) {
            return visitor.visitListaParametros(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParametroContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TIPO(): antlr.TerminalNode {
        return this.getToken(PortugolParser.TIPO, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ID, 0)!;
    }
    public E_COMERCIAL(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.E_COMERCIAL, 0);
    }
    public parametroArray(): ParametroArrayContext | null {
        return this.getRuleContext(0, ParametroArrayContext);
    }
    public parametroMatriz(): ParametroMatrizContext | null {
        return this.getRuleContext(0, ParametroMatrizContext);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_parametro;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterParametro) {
             listener.enterParametro(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitParametro) {
             listener.exitParametro(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitParametro) {
            return visitor.visitParametro(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParametroArrayContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ABRE_COLCHETES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ABRE_COLCHETES, 0)!;
    }
    public FECHA_COLCHETES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.FECHA_COLCHETES, 0)!;
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_parametroArray;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterParametroArray) {
             listener.enterParametroArray(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitParametroArray) {
             listener.exitParametroArray(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitParametroArray) {
            return visitor.visitParametroArray(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParametroMatrizContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ABRE_COLCHETES(): antlr.TerminalNode[];
    public ABRE_COLCHETES(i: number): antlr.TerminalNode | null;
    public ABRE_COLCHETES(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PortugolParser.ABRE_COLCHETES);
    	} else {
    		return this.getToken(PortugolParser.ABRE_COLCHETES, i);
    	}
    }
    public FECHA_COLCHETES(): antlr.TerminalNode[];
    public FECHA_COLCHETES(i: number): antlr.TerminalNode | null;
    public FECHA_COLCHETES(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PortugolParser.FECHA_COLCHETES);
    	} else {
    		return this.getToken(PortugolParser.FECHA_COLCHETES, i);
    	}
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_parametroMatriz;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterParametroMatriz) {
             listener.enterParametroMatriz(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitParametroMatriz) {
             listener.exitParametroMatriz(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitParametroMatriz) {
            return visitor.visitParametroMatriz(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComandoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public listaDeclaracoes(): ListaDeclaracoesContext | null {
        return this.getRuleContext(0, ListaDeclaracoesContext);
    }
    public se(): SeContext | null {
        return this.getRuleContext(0, SeContext);
    }
    public enquanto(): EnquantoContext | null {
        return this.getRuleContext(0, EnquantoContext);
    }
    public facaEnquanto(): FacaEnquantoContext | null {
        return this.getRuleContext(0, FacaEnquantoContext);
    }
    public para(): ParaContext | null {
        return this.getRuleContext(0, ParaContext);
    }
    public escolha(): EscolhaContext | null {
        return this.getRuleContext(0, EscolhaContext);
    }
    public retorne(): RetorneContext | null {
        return this.getRuleContext(0, RetorneContext);
    }
    public pare(): PareContext | null {
        return this.getRuleContext(0, PareContext);
    }
    public atribuicao(): AtribuicaoContext | null {
        return this.getRuleContext(0, AtribuicaoContext);
    }
    public atribuicaoComposta(): AtribuicaoCompostaContext | null {
        return this.getRuleContext(0, AtribuicaoCompostaContext);
    }
    public expressao(): ExpressaoContext | null {
        return this.getRuleContext(0, ExpressaoContext);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_comando;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterComando) {
             listener.enterComando(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitComando) {
             listener.exitComando(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitComando) {
            return visitor.visitComando(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AtribuicaoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expressao(): ExpressaoContext[];
    public expressao(i: number): ExpressaoContext | null;
    public expressao(i?: number): ExpressaoContext[] | ExpressaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }

        return this.getRuleContext(i, ExpressaoContext);
    }
    public OP_ATRIBUICAO(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_ATRIBUICAO, 0)!;
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_atribuicao;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterAtribuicao) {
             listener.enterAtribuicao(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitAtribuicao) {
             listener.exitAtribuicao(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitAtribuicao) {
            return visitor.visitAtribuicao(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AtribuicaoCompostaContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_atribuicaoComposta;
    }
    public override copyFrom(ctx: AtribuicaoCompostaContext): void {
        super.copyFrom(ctx);
    }
}
export class AtribuicaoCompostaSomaContext extends AtribuicaoCompostaContext {
    public constructor(ctx: AtribuicaoCompostaContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressao(): ExpressaoContext[];
    public expressao(i: number): ExpressaoContext | null;
    public expressao(i?: number): ExpressaoContext[] | ExpressaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }

        return this.getRuleContext(i, ExpressaoContext);
    }
    public OP_MAIS_IGUAL(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_MAIS_IGUAL, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterAtribuicaoCompostaSoma) {
             listener.enterAtribuicaoCompostaSoma(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitAtribuicaoCompostaSoma) {
             listener.exitAtribuicaoCompostaSoma(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitAtribuicaoCompostaSoma) {
            return visitor.visitAtribuicaoCompostaSoma(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AtribuicaoCompostaSubtracaoContext extends AtribuicaoCompostaContext {
    public constructor(ctx: AtribuicaoCompostaContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressao(): ExpressaoContext[];
    public expressao(i: number): ExpressaoContext | null;
    public expressao(i?: number): ExpressaoContext[] | ExpressaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }

        return this.getRuleContext(i, ExpressaoContext);
    }
    public OP_MENOS_IGUAL(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_MENOS_IGUAL, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterAtribuicaoCompostaSubtracao) {
             listener.enterAtribuicaoCompostaSubtracao(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitAtribuicaoCompostaSubtracao) {
             listener.exitAtribuicaoCompostaSubtracao(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitAtribuicaoCompostaSubtracao) {
            return visitor.visitAtribuicaoCompostaSubtracao(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AtribuicaoCompostaMultiplicacaoContext extends AtribuicaoCompostaContext {
    public constructor(ctx: AtribuicaoCompostaContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressao(): ExpressaoContext[];
    public expressao(i: number): ExpressaoContext | null;
    public expressao(i?: number): ExpressaoContext[] | ExpressaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }

        return this.getRuleContext(i, ExpressaoContext);
    }
    public OP_MULTIPLICACAO_IGUAL(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_MULTIPLICACAO_IGUAL, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterAtribuicaoCompostaMultiplicacao) {
             listener.enterAtribuicaoCompostaMultiplicacao(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitAtribuicaoCompostaMultiplicacao) {
             listener.exitAtribuicaoCompostaMultiplicacao(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitAtribuicaoCompostaMultiplicacao) {
            return visitor.visitAtribuicaoCompostaMultiplicacao(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AtribuicaoCompostaDivisaoContext extends AtribuicaoCompostaContext {
    public constructor(ctx: AtribuicaoCompostaContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressao(): ExpressaoContext[];
    public expressao(i: number): ExpressaoContext | null;
    public expressao(i?: number): ExpressaoContext[] | ExpressaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }

        return this.getRuleContext(i, ExpressaoContext);
    }
    public OP_DIVISAO_IGUAL(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_DIVISAO_IGUAL, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterAtribuicaoCompostaDivisao) {
             listener.enterAtribuicaoCompostaDivisao(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitAtribuicaoCompostaDivisao) {
             listener.exitAtribuicaoCompostaDivisao(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitAtribuicaoCompostaDivisao) {
            return visitor.visitAtribuicaoCompostaDivisao(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RetorneContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RETORNE(): antlr.TerminalNode {
        return this.getToken(PortugolParser.RETORNE, 0)!;
    }
    public expressao(): ExpressaoContext | null {
        return this.getRuleContext(0, ExpressaoContext);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_retorne;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterRetorne) {
             listener.enterRetorne(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitRetorne) {
             listener.exitRetorne(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitRetorne) {
            return visitor.visitRetorne(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SE(): antlr.TerminalNode {
        return this.getToken(PortugolParser.SE, 0)!;
    }
    public ABRE_PARENTESES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ABRE_PARENTESES, 0)!;
    }
    public expressao(): ExpressaoContext {
        return this.getRuleContext(0, ExpressaoContext)!;
    }
    public FECHA_PARENTESES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.FECHA_PARENTESES, 0)!;
    }
    public listaComandos(): ListaComandosContext {
        return this.getRuleContext(0, ListaComandosContext)!;
    }
    public senao(): SenaoContext | null {
        return this.getRuleContext(0, SenaoContext);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_se;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterSe) {
             listener.enterSe(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitSe) {
             listener.exitSe(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitSe) {
            return visitor.visitSe(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SenaoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SENAO(): antlr.TerminalNode {
        return this.getToken(PortugolParser.SENAO, 0)!;
    }
    public listaComandos(): ListaComandosContext {
        return this.getRuleContext(0, ListaComandosContext)!;
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_senao;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterSenao) {
             listener.enterSenao(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitSenao) {
             listener.exitSenao(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitSenao) {
            return visitor.visitSenao(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnquantoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ENQUANTO(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ENQUANTO, 0)!;
    }
    public ABRE_PARENTESES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ABRE_PARENTESES, 0)!;
    }
    public expressao(): ExpressaoContext {
        return this.getRuleContext(0, ExpressaoContext)!;
    }
    public FECHA_PARENTESES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.FECHA_PARENTESES, 0)!;
    }
    public listaComandos(): ListaComandosContext {
        return this.getRuleContext(0, ListaComandosContext)!;
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_enquanto;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterEnquanto) {
             listener.enterEnquanto(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitEnquanto) {
             listener.exitEnquanto(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitEnquanto) {
            return visitor.visitEnquanto(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FacaEnquantoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FACA(): antlr.TerminalNode {
        return this.getToken(PortugolParser.FACA, 0)!;
    }
    public listaComandos(): ListaComandosContext {
        return this.getRuleContext(0, ListaComandosContext)!;
    }
    public ENQUANTO(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ENQUANTO, 0)!;
    }
    public ABRE_PARENTESES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ABRE_PARENTESES, 0)!;
    }
    public expressao(): ExpressaoContext {
        return this.getRuleContext(0, ExpressaoContext)!;
    }
    public FECHA_PARENTESES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.FECHA_PARENTESES, 0)!;
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_facaEnquanto;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterFacaEnquanto) {
             listener.enterFacaEnquanto(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitFacaEnquanto) {
             listener.exitFacaEnquanto(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitFacaEnquanto) {
            return visitor.visitFacaEnquanto(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParaContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PARA(): antlr.TerminalNode {
        return this.getToken(PortugolParser.PARA, 0)!;
    }
    public ABRE_PARENTESES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ABRE_PARENTESES, 0)!;
    }
    public PONTOVIRGULA(): antlr.TerminalNode[];
    public PONTOVIRGULA(i: number): antlr.TerminalNode | null;
    public PONTOVIRGULA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PortugolParser.PONTOVIRGULA);
    	} else {
    		return this.getToken(PortugolParser.PONTOVIRGULA, i);
    	}
    }
    public condicao(): CondicaoContext {
        return this.getRuleContext(0, CondicaoContext)!;
    }
    public incrementoPara(): IncrementoParaContext {
        return this.getRuleContext(0, IncrementoParaContext)!;
    }
    public FECHA_PARENTESES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.FECHA_PARENTESES, 0)!;
    }
    public listaComandos(): ListaComandosContext {
        return this.getRuleContext(0, ListaComandosContext)!;
    }
    public inicializacaoPara(): InicializacaoParaContext | null {
        return this.getRuleContext(0, InicializacaoParaContext);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_para;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterPara) {
             listener.enterPara(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitPara) {
             listener.exitPara(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitPara) {
            return visitor.visitPara(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ListaComandosContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ABRE_CHAVES(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.ABRE_CHAVES, 0);
    }
    public FECHA_CHAVES(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.FECHA_CHAVES, 0);
    }
    public comando(): ComandoContext[];
    public comando(i: number): ComandoContext | null;
    public comando(i?: number): ComandoContext[] | ComandoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ComandoContext);
        }

        return this.getRuleContext(i, ComandoContext);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_listaComandos;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterListaComandos) {
             listener.enterListaComandos(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitListaComandos) {
             listener.exitListaComandos(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitListaComandos) {
            return visitor.visitListaComandos(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InicializacaoParaContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public atribuicao(): AtribuicaoContext | null {
        return this.getRuleContext(0, AtribuicaoContext);
    }
    public listaDeclaracoes(): ListaDeclaracoesContext | null {
        return this.getRuleContext(0, ListaDeclaracoesContext);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.ID, 0);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_inicializacaoPara;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterInicializacaoPara) {
             listener.enterInicializacaoPara(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitInicializacaoPara) {
             listener.exitInicializacaoPara(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitInicializacaoPara) {
            return visitor.visitInicializacaoPara(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CondicaoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expressao(): ExpressaoContext {
        return this.getRuleContext(0, ExpressaoContext)!;
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_condicao;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterCondicao) {
             listener.enterCondicao(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitCondicao) {
             listener.exitCondicao(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitCondicao) {
            return visitor.visitCondicao(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IncrementoParaContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expressao(): ExpressaoContext | null {
        return this.getRuleContext(0, ExpressaoContext);
    }
    public atribuicaoComposta(): AtribuicaoCompostaContext | null {
        return this.getRuleContext(0, AtribuicaoCompostaContext);
    }
    public atribuicao(): AtribuicaoContext | null {
        return this.getRuleContext(0, AtribuicaoContext);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_incrementoPara;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterIncrementoPara) {
             listener.enterIncrementoPara(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitIncrementoPara) {
             listener.exitIncrementoPara(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitIncrementoPara) {
            return visitor.visitIncrementoPara(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EscolhaContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ESCOLHA(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ESCOLHA, 0)!;
    }
    public ABRE_PARENTESES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ABRE_PARENTESES, 0)!;
    }
    public expressao(): ExpressaoContext {
        return this.getRuleContext(0, ExpressaoContext)!;
    }
    public FECHA_PARENTESES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.FECHA_PARENTESES, 0)!;
    }
    public ABRE_CHAVES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ABRE_CHAVES, 0)!;
    }
    public FECHA_CHAVES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.FECHA_CHAVES, 0)!;
    }
    public caso(): CasoContext[];
    public caso(i: number): CasoContext | null;
    public caso(i?: number): CasoContext[] | CasoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CasoContext);
        }

        return this.getRuleContext(i, CasoContext);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_escolha;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterEscolha) {
             listener.enterEscolha(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitEscolha) {
             listener.exitEscolha(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitEscolha) {
            return visitor.visitEscolha(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CasoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CASO(): antlr.TerminalNode {
        return this.getToken(PortugolParser.CASO, 0)!;
    }
    public DOISPONTOS(): antlr.TerminalNode {
        return this.getToken(PortugolParser.DOISPONTOS, 0)!;
    }
    public CONTRARIO(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.CONTRARIO, 0);
    }
    public expressao(): ExpressaoContext | null {
        return this.getRuleContext(0, ExpressaoContext);
    }
    public ABRE_CHAVES(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.ABRE_CHAVES, 0);
    }
    public FECHA_CHAVES(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.FECHA_CHAVES, 0);
    }
    public pare(): PareContext | null {
        return this.getRuleContext(0, PareContext);
    }
    public comando(): ComandoContext[];
    public comando(i: number): ComandoContext | null;
    public comando(i?: number): ComandoContext[] | ComandoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ComandoContext);
        }

        return this.getRuleContext(i, ComandoContext);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_caso;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterCaso) {
             listener.enterCaso(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitCaso) {
             listener.exitCaso(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitCaso) {
            return visitor.visitCaso(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PareContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PARE(): antlr.TerminalNode {
        return this.getToken(PortugolParser.PARE, 0)!;
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_pare;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterPare) {
             listener.enterPare(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitPare) {
             listener.exitPare(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitPare) {
            return visitor.visitPare(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IndiceArrayContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ABRE_COLCHETES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ABRE_COLCHETES, 0)!;
    }
    public expressao(): ExpressaoContext {
        return this.getRuleContext(0, ExpressaoContext)!;
    }
    public FECHA_COLCHETES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.FECHA_COLCHETES, 0)!;
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_indiceArray;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterIndiceArray) {
             listener.enterIndiceArray(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitIndiceArray) {
             listener.exitIndiceArray(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitIndiceArray) {
            return visitor.visitIndiceArray(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressaoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_expressao;
    }
    public override copyFrom(ctx: ExpressaoContext): void {
        super.copyFrom(ctx);
    }
}
export class ChamadaFuncaoContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ID, 0)!;
    }
    public ABRE_PARENTESES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ABRE_PARENTESES, 0)!;
    }
    public FECHA_PARENTESES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.FECHA_PARENTESES, 0)!;
    }
    public escopoBiblioteca(): EscopoBibliotecaContext | null {
        return this.getRuleContext(0, EscopoBibliotecaContext);
    }
    public listaExpressoes(): ListaExpressoesContext | null {
        return this.getRuleContext(0, ListaExpressoesContext);
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterChamadaFuncao) {
             listener.enterChamadaFuncao(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitChamadaFuncao) {
             listener.exitChamadaFuncao(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitChamadaFuncao) {
            return visitor.visitChamadaFuncao(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ReferenciaArrayContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ID, 0)!;
    }
    public indiceArray(): IndiceArrayContext {
        return this.getRuleContext(0, IndiceArrayContext)!;
    }
    public escopoBiblioteca(): EscopoBibliotecaContext | null {
        return this.getRuleContext(0, EscopoBibliotecaContext);
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterReferenciaArray) {
             listener.enterReferenciaArray(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitReferenciaArray) {
             listener.exitReferenciaArray(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitReferenciaArray) {
            return visitor.visitReferenciaArray(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ReferenciaMatrizContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ID, 0)!;
    }
    public indiceArray(): IndiceArrayContext[];
    public indiceArray(i: number): IndiceArrayContext | null;
    public indiceArray(i?: number): IndiceArrayContext[] | IndiceArrayContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IndiceArrayContext);
        }

        return this.getRuleContext(i, IndiceArrayContext);
    }
    public escopoBiblioteca(): EscopoBibliotecaContext | null {
        return this.getRuleContext(0, EscopoBibliotecaContext);
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterReferenciaMatriz) {
             listener.enterReferenciaMatriz(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitReferenciaMatriz) {
             listener.exitReferenciaMatriz(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitReferenciaMatriz) {
            return visitor.visitReferenciaMatriz(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LiteralObjetoContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ABRE_CHAVES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ABRE_CHAVES, 0)!;
    }
    public FECHA_CHAVES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.FECHA_CHAVES, 0)!;
    }
    public listaPropriedades(): ListaPropriedadesContext | null {
        return this.getRuleContext(0, ListaPropriedadesContext);
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterLiteralObjeto) {
             listener.enterLiteralObjeto(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitLiteralObjeto) {
             listener.exitLiteralObjeto(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitLiteralObjeto) {
            return visitor.visitLiteralObjeto(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MenosUnarioContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public OP_SUBTRACAO(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_SUBTRACAO, 0)!;
    }
    public expressao(): ExpressaoContext {
        return this.getRuleContext(0, ExpressaoContext)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterMenosUnario) {
             listener.enterMenosUnario(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitMenosUnario) {
             listener.exitMenosUnario(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitMenosUnario) {
            return visitor.visitMenosUnario(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MaisUnarioContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public OP_ADICAO(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_ADICAO, 0)!;
    }
    public expressao(): ExpressaoContext {
        return this.getRuleContext(0, ExpressaoContext)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterMaisUnario) {
             listener.enterMaisUnario(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitMaisUnario) {
             listener.exitMaisUnario(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitMaisUnario) {
            return visitor.visitMaisUnario(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NegacaoContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public OP_NAO(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_NAO, 0)!;
    }
    public expressao(): ExpressaoContext {
        return this.getRuleContext(0, ExpressaoContext)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterNegacao) {
             listener.enterNegacao(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitNegacao) {
             listener.exitNegacao(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitNegacao) {
            return visitor.visitNegacao(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NegacaoBitwiseContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public OP_NOT_BITWISE(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_NOT_BITWISE, 0)!;
    }
    public expressao(): ExpressaoContext {
        return this.getRuleContext(0, ExpressaoContext)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterNegacaoBitwise) {
             listener.enterNegacaoBitwise(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitNegacaoBitwise) {
             listener.exitNegacaoBitwise(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitNegacaoBitwise) {
            return visitor.visitNegacaoBitwise(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IncrementoUnarioPosfixadoContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ID, 0)!;
    }
    public OP_INCREMENTO_UNARIO(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_INCREMENTO_UNARIO, 0)!;
    }
    public indiceArray(): IndiceArrayContext[];
    public indiceArray(i: number): IndiceArrayContext | null;
    public indiceArray(i?: number): IndiceArrayContext[] | IndiceArrayContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IndiceArrayContext);
        }

        return this.getRuleContext(i, IndiceArrayContext);
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterIncrementoUnarioPosfixado) {
             listener.enterIncrementoUnarioPosfixado(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitIncrementoUnarioPosfixado) {
             listener.exitIncrementoUnarioPosfixado(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitIncrementoUnarioPosfixado) {
            return visitor.visitIncrementoUnarioPosfixado(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DecrementoUnarioPosfixadoContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ID, 0)!;
    }
    public OP_DECREMENTO_UNARIO(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_DECREMENTO_UNARIO, 0)!;
    }
    public indiceArray(): IndiceArrayContext[];
    public indiceArray(i: number): IndiceArrayContext | null;
    public indiceArray(i?: number): IndiceArrayContext[] | IndiceArrayContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IndiceArrayContext);
        }

        return this.getRuleContext(i, IndiceArrayContext);
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterDecrementoUnarioPosfixado) {
             listener.enterDecrementoUnarioPosfixado(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitDecrementoUnarioPosfixado) {
             listener.exitDecrementoUnarioPosfixado(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitDecrementoUnarioPosfixado) {
            return visitor.visitDecrementoUnarioPosfixado(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IncrementoUnarioPrefixadoContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public OP_INCREMENTO_UNARIO(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_INCREMENTO_UNARIO, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ID, 0)!;
    }
    public indiceArray(): IndiceArrayContext[];
    public indiceArray(i: number): IndiceArrayContext | null;
    public indiceArray(i?: number): IndiceArrayContext[] | IndiceArrayContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IndiceArrayContext);
        }

        return this.getRuleContext(i, IndiceArrayContext);
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterIncrementoUnarioPrefixado) {
             listener.enterIncrementoUnarioPrefixado(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitIncrementoUnarioPrefixado) {
             listener.exitIncrementoUnarioPrefixado(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitIncrementoUnarioPrefixado) {
            return visitor.visitIncrementoUnarioPrefixado(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DecrementoUnarioPrefixadoContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public OP_DECREMENTO_UNARIO(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_DECREMENTO_UNARIO, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ID, 0)!;
    }
    public indiceArray(): IndiceArrayContext[];
    public indiceArray(i: number): IndiceArrayContext | null;
    public indiceArray(i?: number): IndiceArrayContext[] | IndiceArrayContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IndiceArrayContext);
        }

        return this.getRuleContext(i, IndiceArrayContext);
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterDecrementoUnarioPrefixado) {
             listener.enterDecrementoUnarioPrefixado(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitDecrementoUnarioPrefixado) {
             listener.exitDecrementoUnarioPrefixado(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitDecrementoUnarioPrefixado) {
            return visitor.visitDecrementoUnarioPrefixado(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ReferenciaParaVariavelContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ID, 0)!;
    }
    public escopoBiblioteca(): EscopoBibliotecaContext | null {
        return this.getRuleContext(0, EscopoBibliotecaContext);
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterReferenciaParaVariavel) {
             listener.enterReferenciaParaVariavel(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitReferenciaParaVariavel) {
             listener.exitReferenciaParaVariavel(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitReferenciaParaVariavel) {
            return visitor.visitReferenciaParaVariavel(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NumeroInteiroContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.INT, 0);
    }
    public HEXADECIMAL(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.HEXADECIMAL, 0);
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterNumeroInteiro) {
             listener.enterNumeroInteiro(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitNumeroInteiro) {
             listener.exitNumeroInteiro(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitNumeroInteiro) {
            return visitor.visitNumeroInteiro(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NumeroRealContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public REAL(): antlr.TerminalNode {
        return this.getToken(PortugolParser.REAL, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterNumeroReal) {
             listener.enterNumeroReal(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitNumeroReal) {
             listener.exitNumeroReal(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitNumeroReal) {
            return visitor.visitNumeroReal(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ValorLogicoContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LOGICO(): antlr.TerminalNode {
        return this.getToken(PortugolParser.LOGICO, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterValorLogico) {
             listener.enterValorLogico(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitValorLogico) {
             listener.exitValorLogico(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitValorLogico) {
            return visitor.visitValorLogico(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CaracterContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public CARACTER(): antlr.TerminalNode {
        return this.getToken(PortugolParser.CARACTER, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterCaracter) {
             listener.enterCaracter(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitCaracter) {
             listener.exitCaracter(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitCaracter) {
            return visitor.visitCaracter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StringContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(PortugolParser.STRING, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterString) {
             listener.enterString(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitString) {
             listener.exitString(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitString) {
            return visitor.visitString(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExpressaoEntreParentesesContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ABRE_PARENTESES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ABRE_PARENTESES, 0)!;
    }
    public expressao(): ExpressaoContext {
        return this.getRuleContext(0, ExpressaoContext)!;
    }
    public FECHA_PARENTESES(): antlr.TerminalNode {
        return this.getToken(PortugolParser.FECHA_PARENTESES, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterExpressaoEntreParenteses) {
             listener.enterExpressaoEntreParenteses(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitExpressaoEntreParenteses) {
             listener.exitExpressaoEntreParenteses(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitExpressaoEntreParenteses) {
            return visitor.visitExpressaoEntreParenteses(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MultiplicacaoDivisaoModuloContext extends ExpressaoContext {
    public _op?: Token | null;
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressao(): ExpressaoContext[];
    public expressao(i: number): ExpressaoContext | null;
    public expressao(i?: number): ExpressaoContext[] | ExpressaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }

        return this.getRuleContext(i, ExpressaoContext);
    }
    public OP_MULTIPLICACAO(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.OP_MULTIPLICACAO, 0);
    }
    public OP_DIVISAO(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.OP_DIVISAO, 0);
    }
    public OP_MOD(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.OP_MOD, 0);
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterMultiplicacaoDivisaoModulo) {
             listener.enterMultiplicacaoDivisaoModulo(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitMultiplicacaoDivisaoModulo) {
             listener.exitMultiplicacaoDivisaoModulo(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitMultiplicacaoDivisaoModulo) {
            return visitor.visitMultiplicacaoDivisaoModulo(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AdicaoSubtracaoContext extends ExpressaoContext {
    public _op?: Token | null;
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressao(): ExpressaoContext[];
    public expressao(i: number): ExpressaoContext | null;
    public expressao(i?: number): ExpressaoContext[] | ExpressaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }

        return this.getRuleContext(i, ExpressaoContext);
    }
    public OP_ADICAO(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.OP_ADICAO, 0);
    }
    public OP_SUBTRACAO(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.OP_SUBTRACAO, 0);
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterAdicaoSubtracao) {
             listener.enterAdicaoSubtracao(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitAdicaoSubtracao) {
             listener.exitAdicaoSubtracao(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitAdicaoSubtracao) {
            return visitor.visitAdicaoSubtracao(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class OperacaoIgualdadeContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressao(): ExpressaoContext[];
    public expressao(i: number): ExpressaoContext | null;
    public expressao(i?: number): ExpressaoContext[] | ExpressaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }

        return this.getRuleContext(i, ExpressaoContext);
    }
    public OP_IGUALDADE(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_IGUALDADE, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterOperacaoIgualdade) {
             listener.enterOperacaoIgualdade(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitOperacaoIgualdade) {
             listener.exitOperacaoIgualdade(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitOperacaoIgualdade) {
            return visitor.visitOperacaoIgualdade(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class OperacaoDiferencaContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressao(): ExpressaoContext[];
    public expressao(i: number): ExpressaoContext | null;
    public expressao(i?: number): ExpressaoContext[] | ExpressaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }

        return this.getRuleContext(i, ExpressaoContext);
    }
    public OP_DIFERENCA(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_DIFERENCA, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterOperacaoDiferenca) {
             listener.enterOperacaoDiferenca(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitOperacaoDiferenca) {
             listener.exitOperacaoDiferenca(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitOperacaoDiferenca) {
            return visitor.visitOperacaoDiferenca(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class OperacaoMaiorContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressao(): ExpressaoContext[];
    public expressao(i: number): ExpressaoContext | null;
    public expressao(i?: number): ExpressaoContext[] | ExpressaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }

        return this.getRuleContext(i, ExpressaoContext);
    }
    public OP_MAIOR(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_MAIOR, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterOperacaoMaior) {
             listener.enterOperacaoMaior(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitOperacaoMaior) {
             listener.exitOperacaoMaior(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitOperacaoMaior) {
            return visitor.visitOperacaoMaior(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class OperacaoMenorContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressao(): ExpressaoContext[];
    public expressao(i: number): ExpressaoContext | null;
    public expressao(i?: number): ExpressaoContext[] | ExpressaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }

        return this.getRuleContext(i, ExpressaoContext);
    }
    public OP_MENOR(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_MENOR, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterOperacaoMenor) {
             listener.enterOperacaoMenor(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitOperacaoMenor) {
             listener.exitOperacaoMenor(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitOperacaoMenor) {
            return visitor.visitOperacaoMenor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class OperacaoMenorIgualContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressao(): ExpressaoContext[];
    public expressao(i: number): ExpressaoContext | null;
    public expressao(i?: number): ExpressaoContext[] | ExpressaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }

        return this.getRuleContext(i, ExpressaoContext);
    }
    public OP_MENOR_IGUAL(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_MENOR_IGUAL, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterOperacaoMenorIgual) {
             listener.enterOperacaoMenorIgual(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitOperacaoMenorIgual) {
             listener.exitOperacaoMenorIgual(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitOperacaoMenorIgual) {
            return visitor.visitOperacaoMenorIgual(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class OperacaoMaiorIgualContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressao(): ExpressaoContext[];
    public expressao(i: number): ExpressaoContext | null;
    public expressao(i?: number): ExpressaoContext[] | ExpressaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }

        return this.getRuleContext(i, ExpressaoContext);
    }
    public OP_MAIOR_IGUAL(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_MAIOR_IGUAL, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterOperacaoMaiorIgual) {
             listener.enterOperacaoMaiorIgual(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitOperacaoMaiorIgual) {
             listener.exitOperacaoMaiorIgual(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitOperacaoMaiorIgual) {
            return visitor.visitOperacaoMaiorIgual(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class OperacaoELogicoContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressao(): ExpressaoContext[];
    public expressao(i: number): ExpressaoContext | null;
    public expressao(i?: number): ExpressaoContext[] | ExpressaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }

        return this.getRuleContext(i, ExpressaoContext);
    }
    public OP_E_LOGICO(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_E_LOGICO, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterOperacaoELogico) {
             listener.enterOperacaoELogico(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitOperacaoELogico) {
             listener.exitOperacaoELogico(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitOperacaoELogico) {
            return visitor.visitOperacaoELogico(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class OperacaoOuLogicoContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressao(): ExpressaoContext[];
    public expressao(i: number): ExpressaoContext | null;
    public expressao(i?: number): ExpressaoContext[] | ExpressaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }

        return this.getRuleContext(i, ExpressaoContext);
    }
    public OP_OU_LOGICO(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_OU_LOGICO, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterOperacaoOuLogico) {
             listener.enterOperacaoOuLogico(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitOperacaoOuLogico) {
             listener.exitOperacaoOuLogico(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitOperacaoOuLogico) {
            return visitor.visitOperacaoOuLogico(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class OperacaoXorContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressao(): ExpressaoContext[];
    public expressao(i: number): ExpressaoContext | null;
    public expressao(i?: number): ExpressaoContext[] | ExpressaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }

        return this.getRuleContext(i, ExpressaoContext);
    }
    public OP_XOR(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_XOR, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterOperacaoXor) {
             listener.enterOperacaoXor(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitOperacaoXor) {
             listener.exitOperacaoXor(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitOperacaoXor) {
            return visitor.visitOperacaoXor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class OperacaoShiftLeftContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressao(): ExpressaoContext[];
    public expressao(i: number): ExpressaoContext | null;
    public expressao(i?: number): ExpressaoContext[] | ExpressaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }

        return this.getRuleContext(i, ExpressaoContext);
    }
    public OP_SHIFT_LEFT(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_SHIFT_LEFT, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterOperacaoShiftLeft) {
             listener.enterOperacaoShiftLeft(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitOperacaoShiftLeft) {
             listener.exitOperacaoShiftLeft(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitOperacaoShiftLeft) {
            return visitor.visitOperacaoShiftLeft(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class OperacaoShiftRightContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressao(): ExpressaoContext[];
    public expressao(i: number): ExpressaoContext | null;
    public expressao(i?: number): ExpressaoContext[] | ExpressaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }

        return this.getRuleContext(i, ExpressaoContext);
    }
    public OP_SHIFT_RIGHT(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_SHIFT_RIGHT, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterOperacaoShiftRight) {
             listener.enterOperacaoShiftRight(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitOperacaoShiftRight) {
             listener.exitOperacaoShiftRight(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitOperacaoShiftRight) {
            return visitor.visitOperacaoShiftRight(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class OperacaoAndBitwiseContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressao(): ExpressaoContext[];
    public expressao(i: number): ExpressaoContext | null;
    public expressao(i?: number): ExpressaoContext[] | ExpressaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }

        return this.getRuleContext(i, ExpressaoContext);
    }
    public E_COMERCIAL(): antlr.TerminalNode {
        return this.getToken(PortugolParser.E_COMERCIAL, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterOperacaoAndBitwise) {
             listener.enterOperacaoAndBitwise(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitOperacaoAndBitwise) {
             listener.exitOperacaoAndBitwise(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitOperacaoAndBitwise) {
            return visitor.visitOperacaoAndBitwise(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class OperacaoOrBitwiseContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressao(): ExpressaoContext[];
    public expressao(i: number): ExpressaoContext | null;
    public expressao(i?: number): ExpressaoContext[] | ExpressaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }

        return this.getRuleContext(i, ExpressaoContext);
    }
    public OP_OU_BITWISE(): antlr.TerminalNode {
        return this.getToken(PortugolParser.OP_OU_BITWISE, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterOperacaoOrBitwise) {
             listener.enterOperacaoOrBitwise(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitOperacaoOrBitwise) {
             listener.exitOperacaoOrBitwise(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitOperacaoOrBitwise) {
            return visitor.visitOperacaoOrBitwise(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AcessoPropriedadeContext extends ExpressaoContext {
    public constructor(ctx: ExpressaoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressao(): ExpressaoContext {
        return this.getRuleContext(0, ExpressaoContext)!;
    }
    public PONTO(): antlr.TerminalNode {
        return this.getToken(PortugolParser.PONTO, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(PortugolParser.ID, 0)!;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterAcessoPropriedade) {
             listener.enterAcessoPropriedade(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitAcessoPropriedade) {
             listener.exitAcessoPropriedade(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitAcessoPropriedade) {
            return visitor.visitAcessoPropriedade(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ListaExpressoesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expressao(): ExpressaoContext[];
    public expressao(i: number): ExpressaoContext | null;
    public expressao(i?: number): ExpressaoContext[] | ExpressaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }

        return this.getRuleContext(i, ExpressaoContext);
    }
    public atribuicaoComposta(): AtribuicaoCompostaContext[];
    public atribuicaoComposta(i: number): AtribuicaoCompostaContext | null;
    public atribuicaoComposta(i?: number): AtribuicaoCompostaContext[] | AtribuicaoCompostaContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AtribuicaoCompostaContext);
        }

        return this.getRuleContext(i, AtribuicaoCompostaContext);
    }
    public atribuicao(): AtribuicaoContext[];
    public atribuicao(i: number): AtribuicaoContext | null;
    public atribuicao(i?: number): AtribuicaoContext[] | AtribuicaoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AtribuicaoContext);
        }

        return this.getRuleContext(i, AtribuicaoContext);
    }
    public VIRGULA(): antlr.TerminalNode[];
    public VIRGULA(i: number): antlr.TerminalNode | null;
    public VIRGULA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PortugolParser.VIRGULA);
    	} else {
    		return this.getToken(PortugolParser.VIRGULA, i);
    	}
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_listaExpressoes;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterListaExpressoes) {
             listener.enterListaExpressoes(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitListaExpressoes) {
             listener.exitListaExpressoes(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitListaExpressoes) {
            return visitor.visitListaExpressoes(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ListaPropriedadesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public propriedade(): PropriedadeContext[];
    public propriedade(i: number): PropriedadeContext | null;
    public propriedade(i?: number): PropriedadeContext[] | PropriedadeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropriedadeContext);
        }

        return this.getRuleContext(i, PropriedadeContext);
    }
    public VIRGULA(): antlr.TerminalNode[];
    public VIRGULA(i: number): antlr.TerminalNode | null;
    public VIRGULA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PortugolParser.VIRGULA);
    	} else {
    		return this.getToken(PortugolParser.VIRGULA, i);
    	}
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_listaPropriedades;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterListaPropriedades) {
             listener.enterListaPropriedades(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitListaPropriedades) {
             listener.exitListaPropriedades(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitListaPropriedades) {
            return visitor.visitListaPropriedades(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PropriedadeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DOISPONTOS(): antlr.TerminalNode {
        return this.getToken(PortugolParser.DOISPONTOS, 0)!;
    }
    public expressao(): ExpressaoContext {
        return this.getRuleContext(0, ExpressaoContext)!;
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.ID, 0);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.STRING, 0);
    }
    public CARACTER(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.CARACTER, 0);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_propriedade;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterPropriedade) {
             listener.enterPropriedade(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitPropriedade) {
             listener.exitPropriedade(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitPropriedade) {
            return visitor.visitPropriedade(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EscopoBibliotecaContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.ID, 0);
    }
    public PONTO(): antlr.TerminalNode | null {
        return this.getToken(PortugolParser.PONTO, 0);
    }
    public override get ruleIndex(): number {
        return PortugolParser.RULE_escopoBiblioteca;
    }
    public override enterRule(listener: PortugolListener): void {
        if(listener.enterEscopoBiblioteca) {
             listener.enterEscopoBiblioteca(this);
        }
    }
    public override exitRule(listener: PortugolListener): void {
        if(listener.exitEscopoBiblioteca) {
             listener.exitEscopoBiblioteca(this);
        }
    }
    public override accept<Result>(visitor: PortugolVisitor<Result>): Result | null {
        if (visitor.visitEscopoBiblioteca) {
            return visitor.visitEscopoBiblioteca(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
