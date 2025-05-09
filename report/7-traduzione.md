# Introduzione al Caso di Studio: Pizza Delivered Quickly (PDQ)
Caso di studio proposto da Wysocki nel libro “Effective Project Management: Traditional, Agile, Extreme”, Wiley.

## Introduzione
Pizza Delivered Quickly (PDQ) è una catena locale (40 punti vendita) di pizzerie con servizio al tavolo e consegna a domicilio. Recentemente, PDQ ha perso il 30 percento del fatturato, dovuto principalmente a un calo del loro business di consegna a domicilio. Attribuiscono questa perdita esclusivamente al loro principale concorrente, che ha recentemente promosso un programma che garantisce la consegna entro 45 minuti dall’ordine alla consegna a casa. PDQ attualmente pubblicizza la consegna entro un’ora.

PDQ utilizza i computer per le operazioni interne al negozio e per le funzioni aziendali comuni, ma non fa grande affidamento su sistemi software per ricevere, elaborare e consegnare a domicilio gli ordini dei clienti. Pepe Ronee, il loro Supervisore delle Operazioni Informatiche, è stato incaricato di sviluppare un'applicazione software per identificare le sedi delle "fabbriche della pizza" e creare il sistema software necessario per farle funzionare.

Nel commissionare questo progetto, Dee Livery, la loro presidente, ha affermato di fare tutto il possibile. Ha inoltre dichiarato che il futuro di PDQ dipende da questo progetto. Vuole che il team indaghi su un'opzione per consegnare la pizza cruda e "pronta per il forno" in 30 minuti o meno, oppure già cotta in 45 minuti o meno.

Queste pizza factory non avranno spazi per la vendita al dettaglio. La loro unica funzione sarà quella di ricevere ordini, preparare e consegnare le pizze. La factory più vicina alla posizione del cliente riceverà l’ordine da una struttura di ordinazione centrale, lo elaborerà e lo consegnerà entro 30 o 45 minuti dall'inserimento dell’ordine, a seconda che il cliente richieda la pizza pronta per il forno o già cotta.

Ci sono sei applicazioni software che Pepe ha identificato come parte della soluzione.

## Sottosistema di Localizzazione della Pizza Factory
Il primo è un sottosistema software per geolocalizzare le pizza factory. Non si sa ancora quante factory saranno necessarie né dove saranno ubicate. Il sottosistema software dovrà determinare tutto ciò. Chiaramente questo sottosistema è un’applicazione molto complessa. L’obiettivo può essere chiaramente definito, ma anche in tal caso la soluzione non sarà affatto ovvia. Questo sottosistema dovrà utilizzare uno strumento di modellazione molto sofisticato.

I requisiti, le funzionalità e le caratteristiche non sono affatto ovvi. Alcuni aspetti della soluzione possono probabilmente essere immaginati, ma è chiaro che l'intera soluzione è sfuggente in questa fase iniziale. Esattamente come modellarla non è noto all'inizio. Dovrà essere scoperto durante lo svolgimento del progetto di sviluppo.

## Sottosistema di Inserimento Ordini
Il secondo è un sottosistema di inserimento ordini a supporto delle operazioni di negozi e fabbriche. Gli ordini telefonici arriveranno in un’unica sede, saranno presi lì e poi instradati elettronicamente al negozio o alla factory appropriata. Questo sistema si concentra sulle funzioni aziendali di routine e dovrebbe essere facilmente definibile. Software commerciali già pronti (COTS, commercial off-the-shelf) potrebbero costituire una parte significativa della soluzione finale a supporto delle operazioni di negozio e factory.

## Sottosistema di Inoltro Ordini
Questo sottosistema indirizzerà l’ordine a un negozio, una factory o un furgone. La logistica per effettuare questa assegnazione non è affatto chiara, e la progettazione del sottosistema sarà complessa.

## Sottosistema Logistico
Questo sottosistema è il più complesso. Richiederà una visione olistica dell’intero sistema PDQ. La sua complessità deriva dal fatto che i furgoni sono una struttura mobile di produzione e consegna. Pertanto, l'assegnazione di un ordine a un furgone deve tenere conto di dove sarà probabilmente il furgone al momento della consegna dell'ordine.

## Sottosistema di Routing
Questa applicazione software sarà un sottosistema di instradamento per i camion delle consegne. Questa applicazione è diretta e probabilmente implicherà l’installazione di sistemi GPS in tutti i camion per le consegne.

## Sottosistema di Gestione dell’Inventario
L’ultima applicazione sarà un sistema di controllo dell'inventario per gestire le scorte in tutti i negozi e fabbriche e riordinare automaticamente dal fornitore unico che PDQ utilizza sin dall'inizio dell’attività. PDQ è stata informata dal proprio fornitore che può ottenere sconti utilizzando la funzione di riordino automatico. Anche questa applicazione dovrebbe essere una soluzione COTS.

## Conclusione
Queste applicazioni sono chiaramente progetti di sviluppo software molto diversi tra loro che richiedono approcci molto differenti. Il sottosistema di localizzazione della fabbrica della pizza sarà uno strumento di modellazione molto sofisticato. I requisiti, le funzionalità e le caratteristiche non sono affatto ovvi. Alcuni aspetti della soluzione possono probabilmente essere immaginati, ma l'intera soluzione resta sfuggente in questa fase iniziale. Il modo in cui effettuerà la modellazione non è noto all'inizio. Dovrà essere scoperto durante il progetto di sviluppo.

Il sottosistema di inserimento ordini può utilizzare software COTS per l’inserimento ordini, che dovrà essere migliorato nella parte iniziale per indirizzare l’ordine alla fabbrica più vicina e fornire indicazioni di guida per la consegna e altri compiti di completamento nella parte finale. I requisiti, le funzionalità e le caratteristiche di questo sottosistema potrebbero risultare problematici.

I sei sottosistemi che compongono la soluzione PDQ potrebbero ciascuno richiedere un diverso approccio di gestione del progetto. Ogni capitolo conterrà una serie di esercizi che richiederanno la formulazione di strategie e altre decisioni per trovare e mantenere l’approccio di gestione del progetto più adatto.