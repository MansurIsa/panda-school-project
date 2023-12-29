export const initialState = {
    bannerListArr: [],
    contactInfoArr: [],
    servicesListArr: [],
    newsListArr: [],
    videoGalleryListArr: [],
    fotoGalleryListArr: [],
    teachersListArr: [],
    editionListArr: [],
    successListArr: [],
    successItemListArr: [],
    newsRetrieveObj: {},
    serviceRetrieveObj: {},
    teacherRetrieveObj: {},
    editionRetrieveObj: {},
    settingsListArr: [],
    branchListArr: [],
    contactNameValue: "",
    contactEmailValue: "",
    contactSubjectValue: "",
    contactMessageValue: "",
    vacancyName: "",
    subjectToTeach: "",
    fullNameFather: "",
    homeNumber: "",
    email: "",
    mobileNumber: "",
    birthDate: "",
    address: "",
    workedDateStartEnd: "",
    workedDateStartEndSecond: "",
    workedDateStartEndThird: "",
    companyNameAddressField: "",
    companyNameAddressFieldSecond: "",
    companyNameAddressFieldThird: "",
    positionMainObligation: "",
    positionMainObligationSecond: "",
    positionMainObligationThird: "",
    reasonForLeaving: "",
    reasonForLeavingSecond: "",
    reasonForLeavingThird: "",
    studiedDateStartEnd: "",
    studiedDateStartEndSecond: "",
    studiedDateStartEndThird: "",
    studiedUniversity: "",
    studiedUniversitySecond: "",
    studiedUniversityThird: "",
    qualificationDegree: "",
    qualificationDegreeSecond: "",
    qualificationDegreeThird: "",
    resultRateAverage: "",
    resultRateAverageSecond: "",
    resultRateAverageThird: "",
    dateOfParticipationStartEnd: "",
    dateOfParticipationStartEndSecond: "",
    dateOfParticipationStartEndThird: "",
    qualification: "",
    qualificationSecond: "",
    qualificationThird: "",
    placeOfExecuted: "",
    placeOfExecutedSecond: "",
    placeOfExecutedThird: "",
    achievements: "",
    achievementsSecond: "",
    achievementsThird: "",
    otherAchievments: "",
    recommendfullNameFather: "",
    recommendfullNameFatherSecond: "",
    relatedTo: "",
    relatedToSecond: "",
    recommendMobileNumber: "",
    recommendMobileNumberSecond: "",
    isHeaderLoading: false,
    otherHeaderBannerLoading: false,
    branchsListArr: [],
    branchsSeasonsListArr: [],
    branchsId: "",
    seasonSelectValue: "",
    branchsStudentsListArr: [],
    branchsTeachersListArr: [],
    branchsAbiturientsListArr: [],
    branchsBlocksListArr: [],
    branchsClassessListArr: [],
    branchsSubjectsListArr: [],
    branchsGroupsListArr: [],
    branchsMasterForeignLanguageListArr: [],
    branchsMasterSubjectListArr: [],
    branchsMasterGrouptListArr: [],
    branchsMiqSubjectstListArr: [],
    branchsBlockAbiturientsListArr: [],
    branchsCivilSubjectstListArr: [],
    branchsForeignLanguageList2Arr: [],
    getBranchsComputerCourseArr: [],
    branchsAccountingListArr: [],
    branchsHighSchoolClassListArr: [],
    branchsHighSchoolSubjectListArr: [],
    branchsHighSchoolGroupListArr: [],
    branchsPreSchoolSubjectListArr: [],
    branchsPrimarySchoolClassListArr: [],
    branchsPrimarySchoolSubjectListArr: [],
    branchsPrimarySchoolGroupListArr: [],
    accountingSeasonMonthListArr: [],
    monthSelectValue: "",
    accountingTeacherMonthPaymentListArr: [],
    accountingAbiturientMonthPaymentListArr: [],
    accountingMasterMonthPaymentListArr: [],
    accountingMiqMonthPaymentListArr: [],
    accountingCivilMonthPaymentListArr: [],
    accountingForeignlanguageMonthPaymentListArr: [],
    accountingComputerCourseMonthPaymentListArr: [],
    accountingAccountingMonthPaymentListArr: [],
    accountingHighSchoolMonthPaymentListArr: [],
    accountingPreSchoolMonthPaymentListArr: [],
    accountingPrimarySchoolMonthPaymentListArr: [],
    changeMonth: false,
    monthSelVal: "",
    accountingMonthAbiturientPaymentListArr: [],
    accountingMonthMasterPaymentListArr: [],
    accountingMonthMiqPaymentListArr: [],
    accountingMonthCivilPaymentListArr: [],
    accountingMonthComputerCoursePaymentListArr: [],
    accountingMonthForeiginLangPaymentListArr: [],
    accountingMonthAccountingPaymentListArr: [],
    accountingMonthHighSchoolPaymentListArr: [],
    accountingMonthPreSchoolPaymentListArr: [],
    accountingMonthPrimarySchoolPaymentListArr: [],
    accountingMonthTeachersPaymentListArr: [],
    loggedInUser: {},
    loggedInEmail: "",
    notificationListArr: [],
    unreadCount: 0,
    courseOnlineRegTeacherFullName: '',
    courseOnlineRegTeacherEmail: '',
    courseOnlineRegTeacherMobilNumber: '',
    courseOnlineRegTeacherPassportCard: '',
    courseOnlineRegTeacherProfession: '',
    courseOnlineRegTeacherSelect: '',
    courseOnlineRegAbiturientFullName: '',
    courseOnlineRegAbiturientEmail: '',
    courseOnlineRegAbiturientMobilNumber: '',
    courseOnlineRegAbiturientPassportCard: '',
    courseOnlineRegAbiturientSchool: '',
    courseOnlineRegAbiturientSelect: '',
    courseOnlineRegAbiturientGroup: '',
    courseOnlineRegAbiturientClass: '',
    courseOnlineRegAbiturientDim: '',
    courseOnlineRegMasterFullName: '',
    courseOnlineRegMasterEmail: '',
    courseOnlineRegMasterMobilNumber: '',
    courseOnlineRegMasterPassportCard: '',
    courseOnlineRegMasterGraduatedUni: '',
    courseOnlineRegMasterProfession: '',
    courseOnlineRegMasterForeignLang: '',
    courseOnlineRegMasterPoint: '',

    courseOnlineRegMiqFullName: '',
    courseOnlineRegMiqEmail: '',
    courseOnlineRegMiqMobilNumber: '',
    courseOnlineRegMiqPassportCard: '',
    courseOnlineRegMiqGraduatedUni: '',
    courseOnlineRegMiqProfession: '',

    courseOnlineRegCivilFullName: '',
    courseOnlineRegCivilEmail: '',
    courseOnlineRegCivilMobilNumber: '',
    courseOnlineRegCivilPassportCard: '',
    courseOnlineRegCivilGraduatedUni: '',

    courseOnlineRegComputerCourseFullName: '',
    courseOnlineRegComputerCourseEmail: '',
    courseOnlineRegComputerCourseMobilNumber: '',
    courseOnlineRegComputerCoursePassportCard: '',
    courseOnlineRegComputerCourseProgramType: '',


    courseOnlineRegForeignLangFullName: '',
    courseOnlineRegForeignLangEmail: '',
    courseOnlineRegForeignLangMobilNumber: '',
    courseOnlineRegForeignLangPassportCard: '',
    courseOnlineRegForeignLangLanguage: '',


    courseOnlineRegAccountingFullName: '',
    courseOnlineRegAccountingEmail: '',
    courseOnlineRegAccountingMobilNumber: '',
    courseOnlineRegAccountingPassportCard: '',

    courseOnlineRegHighSchoolFullName: '',
    courseOnlineRegHighSchoolEmail: '',
    courseOnlineRegHighSchoolMobilNumber: '',
    courseOnlineRegHighSchoolPassportCard: '',
    courseOnlineRegHighSchoolClass: '',

    courseOnlineRegPreSchoolFullName: '',
    courseOnlineRegPreSchoolEmail: '',
    courseOnlineRegPreSchoolMobilNumber: '',
    courseOnlineRegPreSchoolPassportCard: '',

    courseOnlineRegPrimarySchoolFullName: '',
    courseOnlineRegPrimarySchoolEmail: '',
    courseOnlineRegPrimarySchoolMobilNumber: '',
    courseOnlineRegPrimarySchoolPassportCard: '',
    courseOnlineRegPrimarySchoolClass: '',
    branchCreateModal: false,
    branchName: '',
    refreshed: false,
    branchUpdateModalContainer: false,
    branchUpdateModal: false,
    branchUpdateName: '',
    branchObj: {},
    branchDeleteModalContainer: false,
    seasonCreateModal: false,
    seasonCreateName: '',
    seasonUpdateModal: false,
    seasonUpdateModalContainer: false,
    seasonUpdateName: '',
    seasonObj: {},
    categoryListArr: [],
    categoryCreateModal: false,
    categoryCreateName: '',
    categoryUpdateModalContainer: false,
    categoryUpdateModal: false,
    categoryObj: {},
    categoryUpdateName: '',
    studentCreateModal: false,
    studentCreateName: '',
    studentCreateSurname: '',
    studentCreateTelFirst: '',
    studentCreateTelSecond: '',
    studentCreateWp: '',
    studentsListArr: [],
    classCreateModal: false,
    classesCreateName: '',
    classesListArr: [],
    categorySelectValue: '',
    classUpdateModalContainer: false,
    classesObj: {},
    classUpdateModal: false,
    classUpdateName: '',
    classUpdateSelectValue: '',
    groupCreateModal: false,
    groupsCreateName: '',
    groupUpdateModalContainer: false,
    groupsListArr: [],
    groupsObj: {},
    groupsUpdateModal: false,
    groupsUpdateName: '',
    languageCreateModal: false,
    languageCreateName: '',
    languageUpdateModalContainer: false,
    languageListArr: [],
    languageUpdateModal: false,
    languageObj: {},
    languageUpdateName: '',
    blockCreateModal: false,
    blockCreateName: '',
    blockUpdateModalContainer: false,
    blockListArr: [],
    blockUpdateModal: false,
    blockObj: {},
    blockUpdateName: '',
    subjectCreateModal: false,
    subjectCreateName: '',
    subjectUpdateModalContainer: false,
    subjectListArr: [],
    subjectUpdateModal: false,
    subjectObj: {},
    subjectUpdateName: '',
    studentCreateStatusValue: 'DE',
    studentCreateDimPoint: '',
    studentCreateSectorValue: 'AZ',
    studentCreateSpecialty: '',
    studentCreatePaymentDate: '',
    studentCreatePaymentMoney: '',
    studentCreateSeasonSelectValue: '',
    studentCreateClass: '',
    studentCreateGroup: '',
    studentCreateLanguage: '',

    studentUpdateModalContainer: false,
    studentUpdateModal: false,
    studentObj: {},


    studentUpdateName: '',
    studentUpdateSurname: '',
    studentUpdateTelFirst: '',
    studentUpdateTelSecond: '',
    studentUpdateWp: '',

    studentUpdateStatusValue: 'DE',
    studentUpdateDimPoint: '',
    studentUpdateSectorValue: 'AZ',
    studentUpdateSpecialty: '',
    studentUpdatePaymentDate: '',
    studentUpdatePaymentMoney: '',
    studentUpdateSeasonSelectValue: '',
    studentUpdateClass: '',
    studentUpdateGroup: '',
    studentUpdateLanguage: '',
    studentUpdateCategories: [],
    studentUpdateTeachers: [],
    studentUpdateBlocks: [],
    studentUpdateSubjects: [],
    seasonStudentUpdateId: '',
    monthCreateModalContainer: false,
    teacherCreateModal: false,

    teacherCreateName: '',
    teacherCreateSurname: '',
    teacherCreateTelFirst: '',
    teacherCreateWp: '',
    teacherCreateSpecialty: '',
    teacherCreateSection: '',
    teacherCreateSalary: '',
    teacherCreateStatusValue: 'QE',
    teacherCreatePaymentDate: '',
    teacherCreatePaymentMoney: '',
    teacherCreateSeasonSelectValue: '',
    teacherUpdateModalContainer: false,
    teacherUpdateModal: false,



    teacherUpdateName: '',
    teacherUpdateSurname: '',
    teacherUpdateTelFirst: '',
    teacherUpdateWp: '',
    teacherUpdateSpecialty: '',
    teacherUpdateSection: '',
    teacherUpdateSalary: '',
    teacherUpdateStatusValue: 'QE',
    teacherUpdatePaymentDate: '',
    teacherUpdatePaymentMoney: '',
    teacherUpdateSeasonSelectValue: '',
    teacherObj: {},

    accountingStudentMonthPaymentListArr: [],

    studentPaymentCreateModalContainer: false,

    teacherPaymentCreateModalContainer: false,

    editStudentModalContainer: false,
    editPaymentStudent: {},
    editPaymentStudentDate: "",
    editPaidStudentDate: "",
    editPaymentStudentAmount: "",
    editPaymentStudentType: "",
    editPaymentStudentStatus: false,

    editTeacherModalContainer: false,
    editPaymentTeacher: {},
    editPaymentTeacherDate: "",
    editPaidTeacherDate: "",
    editPaymentTeacherAmount: "",
    editPaymentTeacherType: "",
    editPaymentTeacherStatus: false,

    branchSelectAccountValue: "",

    accountantChangeModalContainer: false,
    accountants: [],
    accountantObj: {},
    accountantUpdateModal: false,
    accountantName: "",
    accountantSurname: "",
    accountantEmail: "",
    isAccountantValue: false,
    accountantBranchSelectValue: "",


    fixedSocialIcons: false,
    whatsappChat: false



}