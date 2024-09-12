export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => {
  const personAge = age ? <p className="Person__age">I am {age}</p> : null;

  const partnerType = sex === 'm' ? 'wife' : 'husband';

  const personPartner = isMarried
    ? `${partnerName} is my ${partnerType}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {personAge}
      <p className="Person__partner">{personPartner}</p>
    </section>
  );
};
