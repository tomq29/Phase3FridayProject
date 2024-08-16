'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Questions', [{
        question: 'Вместо вопросительного знака подставь слово. Гламур, блонды, Гламур, и ?????. А, а, мне неважно',
        correctAnswer: 'брюнетки',
        img:'https://cdn.trinixy.ru/pics3/20080714/sobchak_02.jpg',
        point: 100,
        topicId: 1
      },
      {
        question: 'Одна река была как белый день.Другая чёрная как ночь.А волны третьей были ??????.Но ожидало их одно',
        correctAnswer: 'пламенем',
        img:'https://funny.klev.club/smeh/uploads/posts/2024-04/funny-klev-club-w0rp-p-smeshnie-kartinki-meladze-valerii-3.jpg',
        point: 200,
        topicId: 1
      },
      {
        question: 'Я знаю точно – невозможное возможно.Сойти с ума,?????? так неосторожно.Найти тебя, не отпускать ни днем, ни ночью.Всё невозможное – возможно, знаю точно!',
        correctAnswer: 'влюбиться',
        img:'https://funny.klev.club/smeh/uploads/posts/2024-05/funny-klev-club-s1hh-p-smeshnie-kartinki-bilan-2.jpg',
        point: 300,
        topicId: 1
      },
      {
        question: 'Что это за клоун?',
        correctAnswer: 'Рональд Макдональд',
        img:'https://joy-pup.com/wp-content/uploads/2019/12/ronald_mcdonald.jpg',
        point: 100,
        topicId: 2
      },
      {
        question: 'Что это за клоун?',
        correctAnswer: 'Пеннивайз',
        img:'https://joy-pup.com/wp-content/uploads/2019/12/pennywise.jpg',
        point: 200,
        topicId: 2
      },
      {
        question: 'Что это за клоун?',
        correctAnswer: 'Клоун Красти',
        img:'https://joy-pup.com/wp-content/uploads/2019/12/krasty.jpg',
        point: 300,
        topicId: 2
      },
      {
        question: 'Помните ли вы название картины?',
        correctAnswer: 'Рождение Венеры',
        img:'https://artchive.ru/res/media/img/oy800/work/4a2/162019@2x.webp',
        point: 100,
        topicId: 3
      },
      {
        question: 'Помните ли вы название картины?',
        correctAnswer: 'Девочка с персиками',
        img: "https://cdn.tretyakov.ru/mytretyakov/26/d001bf75d6119625b2029301b1f5f280/thumb/0c435f427d72afd89d2c0d8467f7819e_x1.jpg", 
        point: 200,
        topicId: 3
      },
      {
        question: 'Помните ли вы название картины?',
        correctAnswer: 'Большая волна в Канагаве',
        img: 'https://artchive.ru/res/media/img/oy800/work/9ba/403115.webp',
        point: 300,
        topicId: 3
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Questions', null, {});
  }
};
