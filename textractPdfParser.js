const textract = require("textract");

const extractDocContent = (filePath) => {
  textract.fromFileWithPath(
    filePath,
    { preserveLineBreaks: true },
    (error, text) => {
      if (error) {
        console.error("Error:", error.message);
      } else {
        // Process the extracted text
        const paragraphs = text
          .split("\n")
          .filter((para) => para.trim() !== "");

        // Convert paragraphs into JSON format
        const jsonData = paragraphs.map((para) => ({ content: para }));

        // Output the JSON data
        //console.log(JSON.stringify(jsonData, null, 2));
        jsonString = JSON.stringify(jsonData, null, 2);
        fs.writeFile("./textractOutput.json", jsonString, () => {});

        function amountOfTaxDeductedExtractor(str) {
          const details = str.split(" ");
          return details[2];
        }

        function amountOfTaxDepositedExtractor(str) {
          const details = str.split(" ");
          return details[3];
        }

        function challanTaxDeposited(str) {
          const details = str.split(" ");
          return details[1];
        }

        function bsrCodeExtractor(str) {
          const details = str.split(" ");
          return details[2];
        }

        function dateOfTaxDepositedExtractor(str) {
          const details = str.split(" ");
          return details[3];
        }

        function challanSerialNumberExtractor(str) {
          const details = str.split(" ");
          return details[4];
        }

        function statusOfMatchingExtractor(str) {
          const details = str.split(" ");
          return details[5];
        }

        function partbLastUpdatedOn(str) {
          const details = str.split(" ");
          return details[6];
        }

        let form16Data = {
          partA: {
            certificateNumber: null,
            lastUpdatedOn: null,
            nameAndAddressOfEmployer: null,
            nameAndAddressOfEmployee: null,
            panOfDeductor: null,
            tanOfDeductor: null,
            panOfEmployee: null,
            emplpyeeReferenceNumber: null,
            citTds: null,
            assessmentYear: null,
            periodWithEmployer: {
              from: null,
              to: null,
            },
            receiptNumbers: {
              q1: null,
              q2: null,
              q3: null,
              q4: null,
            },
            amountPaidOrCredited: {
              q1: null,
              q2: null,
              q3: null,
              q4: null,
              total: null,
            },
            amountOfTaxDeducted: {
              q1: null,
              q2: null,
              q3: null,
              q4: null,
              total: null,
            },
            amountOfTaxDeposited: {
              q1: null,
              q2: null,
              q3: null,
              q4: null,
              total: null,
            },
            taxDeductedThroughBookAdjustment: {
              taxDeposited: null,
              bookIdentificationNumber: {
                receiptNumber: null,
                ddoSerialNumber: null,
                dateOfTransferVoucher: null,
                statusOfMatching: null,
              },
            },
            taxDeductedThroughChallan: {
              taxDeposited: {
                slNo1: null,
                slNo2: null,
                slNo3: null,
                slNo4: null,
                slNo5: null,
                slNo6: null,
                slNo7: null,
                slNo8: null,
                slNo9: null,
                slNo10: null,
                slNo11: null,
                slNo12: null,
                total: null,
              },
              challanIdentificationNumber: {
                bsrCode: {
                  slNo1: null,
                  slNo2: null,
                  slNo3: null,
                  slNo4: null,
                  slNo5: null,
                  slNo6: null,
                  slNo7: null,
                  slNo8: null,
                  slNo9: null,
                  slNo10: null,
                  slNo11: null,
                  slNo12: null,
                },
                dateOfTaxDeposited: {
                  slNo1: null,
                  slNo2: null,
                  slNo3: null,
                  slNo4: null,
                  slNo5: null,
                  slNo6: null,
                  slNo7: null,
                  slNo8: null,
                  slNo9: null,
                  slNo10: null,
                  slNo11: null,
                  slNo12: null,
                },
                challanSerialNumber: {
                  slNo1: null,
                  slNo2: null,
                  slNo3: null,
                  slNo4: null,
                  slNo5: null,
                  slNo6: null,
                  slNo7: null,
                  slNo8: null,
                  slNo9: null,
                  slNo10: null,
                  slNo11: null,
                  slNo12: null,
                },
                statusOfMatching: {
                  slNo1: null,
                  slNo2: null,
                  slNo3: null,
                  slNo4: null,
                  slNo5: null,
                  slNo6: null,
                  slNo7: null,
                  slNo8: null,
                  slNo9: null,
                  slNo10: null,
                  slNo11: null,
                  slNo12: null,
                },
              },
            },
            verification: {
              name: null,
              parentName: null,
              deductedAmount: null,
              depositedAmount: null,
              place: null,
              date: null,
              designation: null,
              fullName: null,
            },
          },
          partB: {
            certificateNumber: null,
            lastUpdatedOn: null,
            nameAndAddressOfEmployer: null,
            nameAndAddressOfEmployee: null,
            panOfDeductor: null,
            tanOfDeductor: null,
            panOfEmployee: null,
            citTds: null,
            assessmentYear: null,
            periodWithEmployer: {
              from: null,
              to: null,
            },
            detailsOfSalaryPaid: {
              grossSalary: {
                salaryAsPerProvisions: {
                  incoming: null,
                  outgoing: null,
                },
                valueOfPerquisites: {
                  incoming: null,
                  outgoing: null,
                },
                ProfitsInLieu: {
                  incoming: null,
                  outgoing: null,
                },
                total: null,
                reportedTotalAmountOfSalary: {
                  incoming: null,
                  outgoing: null,
                },
              },
              allowances: {
                travelConcession: {
                  incoming: null,
                  outgoing: null,
                },
                deathCumRetiermentGratuity: {
                  incoming: null,
                  outgoing: null,
                },
                commutedValueOfPension: {
                  incoming: null,
                  outgoing: null,
                },
                cashEquivalentOfLeaveSalary: {
                  incoming: null,
                  outgoing: null,
                },
                houseRentAllowance: {
                  incoming: null,
                  outgoing: null,
                },
                amountOfAnyOtherExemption: {
                  incoming: null,
                  outgoing: null,
                },
                totalAmountOfAnyOtherExemption: {
                  incoming: null,
                  outgoing: null,
                },
                totalAmountOfExemption: {
                  incoming: null,
                  outgoing: null,
                },
              },
              totalAmountOfSalaryReceived: {
                incoming: null,
                outgoing: null,
              },
              deductionsUnderSection16: {
                standardDeduction: {
                  incoming: null,
                  outgoing: null,
                },
                entertainmentAllowance: {
                  incoming: null,
                  outgoing: null,
                },
                taxOnEmployment: {
                  incoming: null,
                  outgoing: null,
                },
              },
              totalAmountOfDeductions: {
                incoming: null,
                outgoing: null,
              },
              incomeChargeable: {
                incoming: null,
                outgoing: null,
              },
              anyOtherIncomeReportedByTheEmployee: {
                incomeFromHouseProperty: {
                  incoming: null,
                  outgoing: null,
                },
                incomeUnderTheHeadOtherSources: {
                  incoming: null,
                  outgoing: null,
                },
              },
              totalAmountOfOtherIncomeReportedByTheEmployee: {
                incoming: null,
                outgoing: null,
              },
              grossTotalIncome: {
                incoming: null,
                outgoing: null,
              },
              deductionsUnderChapter: {
                deductionInRespectOfLifeInsurancePremia: {
                  grossAmount: null,
                  deductibleAmount: null,
                },
                deductionInRespectOfContributionToCertainPensionFunds: {
                  grossAmount: null,
                  deductibleAmount: null,
                },
                deductionInRespectOfContributionByTaxpayerToPensionScheme: {
                  grossAmount: null,
                  deductibleAmount: null,
                },
                totalDeduction: {
                  grossAmount: null,
                  deductibleAmount: null,
                },
                deductionsInRespectOfAmountPaidToNotifiedPensionScheme: {
                  grossAmount: null,
                  deductibleAmount: null,
                },
                deductionInRespectOfContributionByEmployerToPensionScheme: {
                  grossAmount: null,
                  deductibleAmount: null,
                },
                deductionInRespectOfHealthInsurancePremia: {
                  grossAmount: null,
                  deductibleAmount: null,
                },
                deductionInRespectOfInterestOnLoanTaken: {
                  grossAmount: null,
                  deductibleAmount: null,
                },
                totalDeductionInRespectOfDonationsToCertainFunds: {
                  grossAmount: null,
                  qualifyingAmount: null,
                  deductibleAmount: null,
                },
                deductionInRespectOfInterestOnDepositsInSavingsAccount: {
                  grossAmount: null,
                  qualifyingAmount: null,
                  deductibleAmount: null,
                },
                totalOfAmountDeductibleUnderAnyOtherProvision: {
                  grossAmount: null,
                  qualifyingAmount: null,
                  deductibleAmount: null,
                },
              },
            },
            aggregateOfDeductibleAmount: null,
            totalTaxableIncome: null,
            rebateUnderSection87A: null,
            surchargeWhereverApplicable: null,
            healthAndEducationCess: null,
            taxPayable: null,
            reliefUnderSection89: null,
            netTaxPayable: null,
            breakUpForAmountOfAnyOtherExemption: {
              particularsOfAmountForAnyOtherExemption: {
                slNo1: null,
                slNo2: null,
                slNo3: null,
                slNo4: null,
                slNo5: null,
                slNo6: null,
              },
              grossAmount: {
                slNo1: null,
                slNo2: null,
                slNo3: null,
                slNo4: null,
                slNo5: null,
                slNo6: null,
              },
              qualifyingAmount: {
                slNo1: null,
                slNo2: null,
                slNo3: null,
                slNo4: null,
                slNo5: null,
                slNo6: null,
              },
              deductibleAmount: {
                slNo1: null,
                slNo2: null,
                slNo3: null,
                slNo4: null,
                slNo5: null,
                slNo6: null,
              },
            },
            breakUpForAmountDeductibleUnderAnyOtherProvision: {
              particularsOfAmountDeductibleUnderAnyOtherProvision: {
                slNo1: null,
                slNo2: null,
                slNo3: null,
                slNo4: null,
                slNo5: null,
                slNo6: null,
              },
              grossAmount: {
                slNo1: null,
                slNo2: null,
                slNo3: null,
                slNo4: null,
                slNo5: null,
                slNo6: null,
              },
              qualifyingAmount: {
                slNo1: null,
                slNo2: null,
                slNo3: null,
                slNo4: null,
                slNo5: null,
                slNo6: null,
              },
              deductibleAmount: {
                slNo1: null,
                slNo2: null,
                slNo3: null,
                slNo4: null,
                slNo5: null,
                slNo6: null,
              },
            },
            place: null,
            date: null,
            fullName: null,
          },
        };

        // Part A
        form16Data.partA.certificateNumber = jsonData[104]["content"];
        form16Data.partA.lastUpdatedOn = jsonData[167]["content"];
        form16Data.partA.nameAndAddressOfEmployer =
          jsonData[97]["content"] +
          jsonData[96]["content"] +
          "," +
          jsonData[98]["content"] +
          "," +
          jsonData[95]["content"];
        form16Data.partA.nameAndAddressOfEmployee =
          jsonData[99]["content"] + jsonData[100]["content"];
        form16Data.partA.panOfDeductor = jsonData[105]["content"];
        form16Data.partA.tanOfDeductor = jsonData[106]["content"];
        form16Data.partA.panOfEmployee = jsonData[107]["content"];
        form16Data.partA.emplpyeeReferenceNumber = jsonData[104]["content"];
        form16Data.partA.citTds =
          jsonData[102]["content"] + jsonData[103]["content"];
        form16Data.partA.assessmentYear = jsonData[191]["content"];
        form16Data.partA.periodWithEmployer.from = jsonData[33]["content"];
        form16Data.partA.periodWithEmployer.to = jsonData[31]["content"];
        form16Data.partA.receiptNumbers.q1 = jsonData[104]["content"];
        form16Data.partA.receiptNumbers.q2 = jsonData[105]["content"];
        form16Data.partA.receiptNumbers.q3 = jsonData[106]["content"];
        form16Data.partA.receiptNumbers.q4 = jsonData[107]["content"];
        form16Data.partA.amountPaidOrCredited.q1 = jsonData[46]["content"];
        form16Data.partA.amountPaidOrCredited.q2 = jsonData[48]["content"];
        form16Data.partA.amountPaidOrCredited.q3 = jsonData[50]["content"];
        form16Data.partA.amountPaidOrCredited.q4 = jsonData[52]["content"];
        form16Data.partA.amountPaidOrCredited.total = jsonData[54]["content"];
        form16Data.partA.amountOfTaxDeducted.q1 = amountOfTaxDeductedExtractor(
          jsonData[45]["content"]
        );
        form16Data.partA.amountOfTaxDeducted.q2 = amountOfTaxDeductedExtractor(
          jsonData[47]["content"]
        );
        form16Data.partA.amountOfTaxDeducted.q3 = amountOfTaxDeductedExtractor(
          jsonData[49]["content"]
        );
        form16Data.partA.amountOfTaxDeducted.q4 = amountOfTaxDeductedExtractor(
          jsonData[51]["content"]
        );
        form16Data.partA.amountOfTaxDeducted.total =
          amountOfTaxDeductedExtractor(jsonData[53]["content"]);
        form16Data.partA.amountOfTaxDeposited.q1 =
          amountOfTaxDepositedExtractor(jsonData[45]["content"]);
        form16Data.partA.amountOfTaxDeposited.q2 =
          amountOfTaxDepositedExtractor(jsonData[47]["content"]);
        form16Data.partA.amountOfTaxDeposited.q3 =
          amountOfTaxDepositedExtractor(jsonData[49]["content"]);
        form16Data.partA.amountOfTaxDeposited.q4 =
          amountOfTaxDepositedExtractor(jsonData[51]["content"]);
        form16Data.partA.amountOfTaxDeposited.total =
          amountOfTaxDepositedExtractor(jsonData[53]["content"]);
        form16Data.partA.taxDeductedThroughChallan.taxDeposited.slNo1 =
          challanTaxDeposited(jsonData[80]["content"]);
        form16Data.partA.taxDeductedThroughChallan.taxDeposited.slNo2 =
          challanTaxDeposited(jsonData[81]["content"]);
        form16Data.partA.taxDeductedThroughChallan.taxDeposited.slNo3 =
          challanTaxDeposited(jsonData[82]["content"]);
        form16Data.partA.taxDeductedThroughChallan.taxDeposited.slNo4 =
          challanTaxDeposited(jsonData[83]["content"]);
        form16Data.partA.taxDeductedThroughChallan.taxDeposited.slNo5 =
          challanTaxDeposited(jsonData[138]["content"]);
        form16Data.partA.taxDeductedThroughChallan.taxDeposited.slNo6 =
          challanTaxDeposited(jsonData[139]["content"]);
        form16Data.partA.taxDeductedThroughChallan.taxDeposited.slNo7 =
          challanTaxDeposited(jsonData[140]["content"]);
        form16Data.partA.taxDeductedThroughChallan.taxDeposited.slNo8 =
          challanTaxDeposited(jsonData[141]["content"]);
        form16Data.partA.taxDeductedThroughChallan.taxDeposited.slNo9 =
          challanTaxDeposited(jsonData[142]["content"]);
        form16Data.partA.taxDeductedThroughChallan.taxDeposited.slNo10 =
          challanTaxDeposited(jsonData[143]["content"]);
        form16Data.partA.taxDeductedThroughChallan.taxDeposited.slNo11 =
          challanTaxDeposited(jsonData[144]["content"]);
        form16Data.partA.taxDeductedThroughChallan.taxDeposited.slNo12 =
          challanTaxDeposited(jsonData[145]["content"]);
        form16Data.partA.taxDeductedThroughChallan.taxDeposited.total = (() => {
          const details = jsonData[146]["content"].split(" ");
          return details[2];
        })();
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.bsrCode.slNo1 =
          bsrCodeExtractor(jsonData[80]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.bsrCode.slNo2 =
          bsrCodeExtractor(jsonData[81]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.bsrCode.slNo3 =
          bsrCodeExtractor(jsonData[82]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.bsrCode.slNo4 =
          bsrCodeExtractor(jsonData[83]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.bsrCode.slNo5 =
          bsrCodeExtractor(jsonData[138]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.bsrCode.slNo6 =
          bsrCodeExtractor(jsonData[139]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.bsrCode.slNo7 =
          bsrCodeExtractor(jsonData[140]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.bsrCode.slNo8 =
          bsrCodeExtractor(jsonData[141]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.bsrCode.slNo9 =
          bsrCodeExtractor(jsonData[142]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.bsrCode.slNo10 =
          bsrCodeExtractor(jsonData[143]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.bsrCode.slNo11 =
          bsrCodeExtractor(jsonData[144]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.bsrCode.slNo12 =
          bsrCodeExtractor(jsonData[145]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.dateOfTaxDeposited.slNo1 =
          dateOfTaxDepositedExtractor(jsonData[80]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.dateOfTaxDeposited.slNo2 =
          dateOfTaxDepositedExtractor(jsonData[81]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.dateOfTaxDeposited.slNo3 =
          dateOfTaxDepositedExtractor(jsonData[82]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.dateOfTaxDeposited.slNo4 =
          dateOfTaxDepositedExtractor(jsonData[83]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.dateOfTaxDeposited.slNo5 =
          dateOfTaxDepositedExtractor(jsonData[138]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.dateOfTaxDeposited.slNo6 =
          dateOfTaxDepositedExtractor(jsonData[139]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.dateOfTaxDeposited.slNo7 =
          dateOfTaxDepositedExtractor(jsonData[140]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.dateOfTaxDeposited.slNo8 =
          dateOfTaxDepositedExtractor(jsonData[141]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.dateOfTaxDeposited.slNo9 =
          dateOfTaxDepositedExtractor(jsonData[142]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.dateOfTaxDeposited.slNo10 =
          dateOfTaxDepositedExtractor(jsonData[143]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.dateOfTaxDeposited.slNo11 =
          dateOfTaxDepositedExtractor(jsonData[144]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.dateOfTaxDeposited.slNo12 =
          dateOfTaxDepositedExtractor(jsonData[145]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.challanSerialNumber.slNo1 =
          challanSerialNumberExtractor(jsonData[80]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.challanSerialNumber.slNo2 =
          challanSerialNumberExtractor(jsonData[81]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.challanSerialNumber.slNo3 =
          challanSerialNumberExtractor(jsonData[82]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.challanSerialNumber.slNo4 =
          challanSerialNumberExtractor(jsonData[83]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.challanSerialNumber.slNo5 =
          challanSerialNumberExtractor(jsonData[138]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.challanSerialNumber.slNo6 =
          challanSerialNumberExtractor(jsonData[139]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.challanSerialNumber.slNo7 =
          challanSerialNumberExtractor(jsonData[140]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.challanSerialNumber.slNo8 =
          challanSerialNumberExtractor(jsonData[141]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.challanSerialNumber.slNo9 =
          challanSerialNumberExtractor(jsonData[142]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.challanSerialNumber.slNo10 =
          challanSerialNumberExtractor(jsonData[143]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.challanSerialNumber.slNo11 =
          challanSerialNumberExtractor(jsonData[144]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.challanSerialNumber.slNo12 =
          challanSerialNumberExtractor(jsonData[145]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.statusOfMatching.slNo1 =
          statusOfMatchingExtractor(jsonData[80]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.statusOfMatching.slNo2 =
          statusOfMatchingExtractor(jsonData[81]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.statusOfMatching.slNo3 =
          statusOfMatchingExtractor(jsonData[82]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.statusOfMatching.slNo4 =
          statusOfMatchingExtractor(jsonData[83]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.statusOfMatching.slNo5 =
          statusOfMatchingExtractor(jsonData[138]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.statusOfMatching.slNo6 =
          statusOfMatchingExtractor(jsonData[139]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.statusOfMatching.slNo7 =
          statusOfMatchingExtractor(jsonData[140]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.statusOfMatching.slNo8 =
          statusOfMatchingExtractor(jsonData[141]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.statusOfMatching.slNo9 =
          statusOfMatchingExtractor(jsonData[142]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.statusOfMatching.slNo10 =
          statusOfMatchingExtractor(jsonData[143]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.statusOfMatching.slNo11 =
          statusOfMatchingExtractor(jsonData[144]["content"]);
        form16Data.partA.taxDeductedThroughChallan.challanIdentificationNumber.statusOfMatching.slNo12 =
          statusOfMatchingExtractor(jsonData[145]["content"]);
        form16Data.partA.verification.name = (() => {
          const details = jsonData[165]["content"].split(" ");
          return details[0];
        })();
        form16Data.partA.verification.parentName = (() => {
          const details = jsonData[165]["content"].split(" ");
          return details[1];
        })();
        form16Data.partA.verification.deductedAmount = (() => {
          const details = jsonData[110]["content"].split(" ");
          return details[2];
        })();
        form16Data.partA.verification.depositedAmount = (() => {
          const details = jsonData[110]["content"].split(" ");
          return details[24];
        })();
        form16Data.partA.verification.place = jsonData[166]["content"];
        form16Data.partA.verification.date = jsonData[167]["content"];
        form16Data.partA.verification.designation = jsonData[118]["content"];
        form16Data.partA.verification.fullName = jsonData[168]["content"];

        // Part B
        form16Data.partB.certificateNumber = jsonData[104]["content"];
        form16Data.partB.lastUpdatedOn = partbLastUpdatedOn(
          jsonData[85]["content"]
        );
        form16Data.partB.nameAndAddressOfEmployer =
          jsonData[97]["content"] +
          jsonData[96]["content"] +
          "," +
          jsonData[98]["content"] +
          "," +
          jsonData[95]["content"];
        form16Data.partB.nameAndAddressOfEmployee =
          jsonData[99]["content"] + jsonData[100]["content"];
        form16Data.partB.panOfDeductor = jsonData[105]["content"];
        form16Data.partB.tanOfDeductor = jsonData[106]["content"];
        form16Data.partB.panOfEmployee = jsonData[107]["content"];
        form16Data.partB.emplpyeeReferenceNumber = jsonData[104]["content"];
        form16Data.partB.citTds =
          jsonData[102]["content"] + jsonData[103]["content"];
        form16Data.partB.assessmentYear = jsonData[191]["content"];
        form16Data.partB.periodWithEmployer.from = jsonData[33]["content"];
        form16Data.partB.periodWithEmployer.to = jsonData[31]["content"];
        form16Data.partB.detailsOfSalaryPaid.grossSalary.salaryAsPerProvisions.incoming =
          jsonData[54]["content"];
        form16Data.partB.detailsOfSalaryPaid.grossSalary.valueOfPerquisites.incoming =
          jsonData[210]["content"];
        form16Data.partB.detailsOfSalaryPaid.grossSalary.ProfitsInLieu.incoming =
          jsonData[214]["content"];
        form16Data.partB.detailsOfSalaryPaid.grossSalary.total = (() => {
          const details = jsonData[211]["content"].split(" ");
          return details[2];
        })();
        form16Data.partB.detailsOfSalaryPaid.allowances.travelConcession.incoming =
          jsonData[226]["content"];
        form16Data.partB.detailsOfSalaryPaid.allowances.deathCumRetiermentGratuity.incoming =
          jsonData[228]["content"];
        form16Data.partB.detailsOfSalaryPaid.allowances.commutedValueOfPension.incoming =
          jsonData[252]["content"];
        form16Data.partB.detailsOfSalaryPaid.allowances.cashEquivalentOfLeaveSalary.incoming =
          jsonData[260]["content"];
        form16Data.partB.detailsOfSalaryPaid.allowances.houseRentAllowance.incoming =
          (() => {
            const details = jsonData[227]["content"].split(" ");
            return details[1];
          })();
        form16Data.partB.detailsOfSalaryPaid.allowances.totalAmountOfAnyOtherExemption.incoming =
          jsonData[280]["content"];
        form16Data.partB.detailsOfSalaryPaid.allowances.totalAmountOfExemption.incoming =
          jsonData[289]["content"];
        form16Data.partB.detailsOfSalaryPaid.totalAmountOfSalaryReceived.outgoing =
          jsonData[255]["content"];
        form16Data.partB.detailsOfSalaryPaid.deductionsUnderSection16.standardDeduction.incoming =
          (() => {
            const details = jsonData[262]["content"].split(" ");
            return details[1];
          })();
        form16Data.partB.detailsOfSalaryPaid.deductionsUnderSection16.entertainmentAllowance.incoming =
          jsonData[292]["content"];
        form16Data.partB.detailsOfSalaryPaid.deductionsUnderSection16.taxOnEmployment.incoming =
          (() => {
            const details = jsonData[264]["content"].split(" ");
            return details[6];
          })();
        form16Data.partB.detailsOfSalaryPaid.deductionsUnderSection16.totalAmountOfDeductions.outgoing =
          jsonData[270]["content"];
        form16Data.partB.detailsOfSalaryPaid.deductionsUnderSection16.incomeChargeable.outgoing =
          jsonData[271]["content"];
        form16Data.partB.detailsOfSalaryPaid.deductionsUnderSection16.anyOtherIncomeReportedByTheEmployee.incomeFromHouseProperty.incoming =
          jsonData[302]["content"];
        form16Data.partB.detailsOfSalaryPaid.deductionsUnderSection16.anyOtherIncomeReportedByTheEmployee.incomeUnderTheHeadOtherSources.incoming =
          jsonData[308]["content"];
        form16Data.partB.detailsOfSalaryPaid.grossTotalIncome.outgoing =
          jsonData[283]["content"];
        // Displaying data
        //console.log(form16Data.partA.taxDeductedThroughChallan);
        console.log(form16Data);

        // Length of JSON
        let jsonSize = Object.keys(jsonData).length;
        // console.log(jsonSize);
      }
    }
  );
};

// Usage
const filePath = "./form16Source.pdf";
extractDocContent(filePath);
