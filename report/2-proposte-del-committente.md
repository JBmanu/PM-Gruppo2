# Proposte del committente

## Soluzioni proposte dal cliente:
- Pizza Factory Locator Subsystem (posizionamento strategico delle pizza factory)
- Order Entry Subsystem (gestione degli ordini)
- Order Submit Subsystem (gestione dello smistamento degli ordini)
- Logistics Subsystem (gestione della presa in carica dell’ordine e delivery)
- Routing Subsystem (gestione per il delivery con GPS)
- Inventory Management Subsystem (gestione delle forniture)

## Gestione dei rischi

### Pizza factory locator subsystem

|Descrizione|Scope triangle|Impatto|Mitigazione|
|---|---|---|---|
|Design in continuo cambiamento|Scope|Alto|Alto|
|Bilanciamento numero e posizione delle factory|Costi|Alto|Medio|
|Difficoltà di integrare il locator subsystem con gli altri|Scope|Alto|Alto|

### Order entry subsystem

|Descrizione|Scope triangle|Impatto|Mitigazione|
|---|---|---|---|
|Mancanza di UX|Qualità|Medio|Alto|
|Basse performance|Qualità|Medio|Medio|
|Supporto utente non adeguato|Qualità|Medio|Basso|
|Quantità troppo elevata di ordini|Risorse|Medio|Basso|
|Difficoltà di integrare l’order entry subsystem con gli altri|Scope|Alto|Medio|

### Order submit subsytem

|Descrizione|Scope triangle|Impatto|Mitigazione|
|---|---|---|---|
|Design del sottosistema complesso|Scope|Alto|Alto|
|Difficoltà di integrare l’order submit subsystem con gli altri|Scope|Alto|Alto|

### Logistics subsystem

|Descrizione|Scope triangle|Impatto|Mitigazione|
|---|---|---|---|
|Catena di produzione sovraccaricata di ordini|Tempo|Alto|Basso|
|Assegnazione ordine ad una catena di produzione che non sia la più ottimale|Tempo|Alto|Alto|
|Assegnazione ordine ad un rider che non sia il più ottimale|Tempo|Alto|Alto|
|Design del sottosistema complesso|Scope|Alto|Alto|
|Difficoltà di integrare il logistics subsystem con gli altri|Scope|Alto|Alto|

### Routing subsystem

|Descrizione|Scope triangle|Impatto|Mitigazione|
|---|---|---|---|
|Difficoltà di integrare il routing subsystem con gli altri|Scope|Basso|Basso|

### Inventory management subsystem

|Descrizione|Scope triangle|Impatto|Mitigazione|
|---|---|---|---|
|Bilanciamento tra costi e disponibilità|Costi|Medio|Medio|
|Bilanciamento tra materie prime e domanda|Risorse|Alto|Basso|
|Difficoltà di integrare l’inventory management subsystem con gli altri|Scope|Medio|Basso|

### Project management risks

Descrizione|Scope triangle|Impatto|Mitigazione|
|---|---|---|---|
|Scarsa cura nell'allocazione delle risorse|Risorse|Alto|Medio|

## Valutazione delle proposte

**Bozza per ricordarci (Proposta Corrado)**
L'Order Entry subsystem dovrebbe prendere gli ordini e l'Order Submit subsystem li smista nei Logistics subsystem e al Pizza Factory Locator subsystem (a quest'ultimo è sufficiente solo l'indirizzo).
La Logistics subsystem si occupa di scegliere quale catena di produzione e rider siano i più ottimali per consegnare la pizza in meno di 45 minuti.
A questo punto la Logistics invia una notifica al rider scelto che si vedrà maps (o simile) con il percorso per arrivare alla catena di produzione della pizza e in seguito all'utente che l'ha richiesta.
