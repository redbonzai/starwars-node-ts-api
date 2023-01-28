create table public.addresses
(
    id    integer generated always as identity
        primary key,
    line1 varchar(100) not null,
    line2 varchar(100) default NULL::character varying,
    city  varchar(100) not null,
    state varchar(2)   not null,
    zip   varchar(5)   not null
);

alter table public.addresses
    owner to postgres;

INSERT INTO public.addresses (line1, line2, city, state, zip) VALUES ('185 Berry St', 'Suite 6100', 'San Francisco', 'CA', '94107');
INSERT INTO public.addresses (line1, line2, city, state, zip) VALUES ('500 S State St', null, 'Ann Arbor', 'MI', '48109');
INSERT INTO public.addresses (line1, line2, city, state, zip) VALUES ('1600 Holloway Ave', 'Suite 10', 'San Francisco', 'CA', '94132');
INSERT INTO public.addresses (line1, line2, city, state, zip) VALUES ('1600 Holloway Ave', 'Suite 20', 'San Francisco', 'CA', '94132');
INSERT INTO public.addresses (line1, line2, city, state, zip) VALUES ('1600 Holloway Ave', null, 'San Francisco', 'CA', '94132');
INSERT INTO public.addresses (line1, line2, city, state, zip) VALUES ('Roosevelt Way NE', null, 'Seattle', 'WA', '98132');
INSERT INTO public.addresses (line1, line2, city, state, zip) VALUES ('3400 N. Charles St.', null, 'Baltimore', 'MD', '21218');
INSERT INTO public.addresses (line1, line2, city, state, zip) VALUES ('Massachusetts Hall', null, 'Cambridge', 'MA', '02138');
