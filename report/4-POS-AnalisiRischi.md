# Analisi dei rischi

## Tecnical risks

|Event|Scope triangle|Impact|Mitigate|
|---|---|---|---|
|Basse performance|Qualità|Medio|Evitare|

### Pizza factory locator subsystem

|Event|Scope triangle|Impact|Mitigate|
|---|---|---|---|
|Bilanciamento numero e posizione delle factory|Costi|Alto|Mitigazione|
|Difficoltà di integrare il locator subsystem con gli altri|Scope|Medio|Piano di contingenza|

### Order entry subsystem

|Event|Scope triangle|Impact|Mitigate|
|---|---|---|---|
|Mancanza di UX|Qualità|Medio|Evitare|
|Assistenza clienti non adeguata|Qualità|Medio|Mitigazione|
|Capacità del sistema insufficiente per il numero di ordini in arrivo|Risorse|Medio|Piano di contingenza|
|Difficoltà di integrare l’order entry subsystem con gli altri|Scope|Alto|Piano di contingenza|

### Order submit subsytem

|Event|Scope triangle|Impact|Mitigate|
|---|---|---|---|
|Difficoltà di integrare l’order submit subsystem con gli altri|Scope|Alto|Piano di contingenza|

### Logistics subsystem

|Event|Scope triangle|Impact|Mitigate|
|---|---|---|---|
|Catena di produzione sovraccaricata di ordini|Tempo|Alto|Mitigazione|
|Assegnazione ordine ad una catena di produzione che non sia la più ottimale|Tempo|Alto|Evitare|
|Assegnazione ordine ad un rider che non sia il più ottimale|Tempo|Alto|Evitare|
|Difficoltà di integrare il logistics subsystem con gli altri|Scope|Alto|Evitare|

### Routing subsystem

|Event|Scope triangle|Impact|Mitigate|
|---|---|---|---|
|Difficoltà di integrare il routing subsystem con gli altri|Scope|Basso|Accetto|

### Inventory management subsystem

|Event|Scope triangle|Impact|Mitigate|
|---|---|---|---|
|Bilanciamento tra costi e disponibilità|Costi|Medio|Trasferisco|
|Bilanciamento tra materie prime e domanda|Risorse|Alto|Trasferisco|
|Difficoltà di integrare l’inventory management subsystem con gli altri|Scope|Medio|Mitigazione|


## Project management risks

Event|Scope triangle|Impact|Mitigate|
|---|---|---|---|
|Scarsa cura nell'allocazione delle risorse|Risorse|Alto|Mitigazione|
