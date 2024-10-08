# Testrapport för finCalc-modulen

## Introduktion
Denna rapport beskriver de manuella tester som gjorts för att kontrollera att funktionaliteten i modulen fungerar som tänkt.

## Översikt testade funktioner
1. Average.add() och Average.calculate()
2. createBudget()
3. calculateSavings()
4. calculateNetPresentValue()
5. rankedInvestments()
6. validateNetPresentValueInputs()
7. rentOrBuy()
8. validateRentOrBuyInput()

## Detaljerade testfall

### `1. Average.add() och Average.calculate()`
**Beskrivning:** Testar att lägga till 3 nummer och beräkna genomsnittet.<br>
**Förväntat resultat:** Resultatet av [1, 2, 3] skall vara 2<br>
**Testresultat:** OK

### `2. createBudget()`
**Beskrivning:** Testar att skapa en budget baserat på en användares månadsinkomst och utgifter.<br>
**Förväntat resultat:** En budget med korrekt summerade utgifter och ett budget-objekt skrivs ut.<br>
**Testresultat:** OK

### `3. calculateSavings()`
**Beskrivning:** Testar att beräkna hur mycket en användare behöver spara per månad för att nå ett givet belopp inom given tidsram.<br>
**Förväntat resultat:** Belopp att spara per månad returneras.<br>
**Testresultat:** OK

### `4. calculateNetPresentValue()`
**Beskrivning:** Beräknar NPV baserat på en serie kassaflöden och en ränta.<br>
**Förväntat resultat:** Kassaflöde [100, 200, 300] och ränta 0.1 skall ge NPV 529.75.<br>
**Testresultat:** OK

### `5. rankedInvestments()`
**Beskrivning:** Testar att ranka en serie investeringar med olika kassaflöde och olika räntor för att utvärdera vilken investering som är mest fördelaktig.<br>
**Förväntat resultat:** Investeringarna skall rankas i fallande ordning, den mest fördelaktiga överst.<br>
**Testresultat:** OK

### `6. validateNetPresentValueInputs()`
**Beskrivning:** Testar att felhanteringen för input till Net Present Value beräkningar.<br>
**Förväntat resultat:** Investeringarna rankas inte då det saknas kassaflöde för en av investeringarna, istället syns felmeddelande "Cash flows must be a non-empty array".<br>
**Testresultat:** OK

### `7. rentOrBuy()`
**Beskrivning:** Testa att jämföra kostnader mellan att köpa eller hyra en produkt med hänsyn till att den skall användas under ett givet antal månader.<br>
**Förväntat resultat:** Inköpspris 100, hyrkostnad/månad 20 och period 5 månader skall ge korrekt kostnadsjämförelse och antal månader till break-even.<br>
**Testresultat:** OK

### `8. validateRentOrBuyInput()`
**Beskrivning:** Testa felhantering genom att lägga in negativt värde.<br>
**Förväntat resultat:** Inköpspris 100, hyrkostnad/månad 20 och period -5 månader skall avsluta programmet och kasta ett fel.<br>
**Testresultat:** OK
