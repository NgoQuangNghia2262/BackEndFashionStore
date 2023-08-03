use FashionStore
go

create table Product
(
	img char(100),
	name nvarchar(100) not null,
	category nvarchar(100) default N'Khác',
	color nvarchar(100) not null,
	size char(10) not null,
	price float default 0,
	discount FLOAT default 0,
	describe NVARCHAR(1000),
	inventory float default 0

		primary key(name , color , size),
)
go

insert into Product
values('aokhoacnu.webp', N'Áo Khoác Nữ', N'Quần Áo', N'Trắng', 'S', 100000, 0, N'', 10)
insert into Product
values('aokhoacnu.webp', N'Áo Khoác Nữ', N'Quần Áo', N'Trắng', 'M', 100000, 0, N'', 10)
insert into Product
values('aokhoacnu.webp', N'Áo Khoác Nữ', N'Quần Áo', N'Trắng', 'L', 100000, 0, N'', 10)
insert into Product
values('aokhoacnu.webp', N'Áo Khoác Nữ', N'Quần Áo', N'Đen', 'S', 100000, 0, N'', 10)
insert into Product
values('aokhoacnu.webp', N'Áo Khoác Nữ', N'Quần Áo', N'Đen', 'M', 100000, 0, N'', 10)
insert into Product
values('aokhoacnu.webp', N'Áo Khoác Nữ', N'Quần Áo', N'Đen', 'L', 100000, 0, N'', 10)

insert into Product
values('aolennu.webp', N'Áo Len Nữ', N'Quần Áo', N'Trắng', 'S', 100000, 0, N'', 10)
insert into Product
values('aolennu.webp', N'Áo Len Nữ', N'Quần Áo', N'Trắng', 'M', 100000, 0, N'', 10)
insert into Product
values('aolennu.webp', N'Áo Len Nữ', N'Quần Áo', N'Trắng', 'L', 100000, 0, N'', 10)
insert into Product
values('aolennu.webp', N'Áo Len Nữ', N'Quần Áo', N'Đen', 'S', 100000, 0, N'', 10)
insert into Product
values('aolennu.webp', N'Áo Len Nữ', N'Quần Áo', N'Đen', 'M', 100000, 0, N'', 10)
insert into Product
values('aolennu.webp', N'Áo Len Nữ', N'Quần Áo', N'Đen', 'L', 100000, 0, N'', 10)

insert into Product
values('dothethaonu.webp', N'Đồ Thể Thao Nữ', N'Quần Áo', N'Trắng', 'S', 100000, 0, N'', 10)
insert into Product
values('dothethaonu.webp', N'Đồ Thể Thao Nữ', N'Quần Áo', N'Trắng', 'M', 100000, 0, N'', 10)
insert into Product
values('dothethaonu.webp', N'Đồ Thể Thao Nữ', N'Quần Áo', N'Trắng', 'L', 100000, 0, N'', 10)
insert into Product
values('dothethaonu.webp', N'Đồ Thể Thao Nữ', N'Quần Áo', N'Đen', 'S', 100000, 0, N'', 10)
insert into Product
values('dothethaonu.webp', N'Đồ Thể Thao Nữ', N'Quần Áo', N'Đen', 'M', 100000, 0, N'', 10)
insert into Product
values('dothethaonu.webp', N'Đồ Thể Thao Nữ', N'Quần Áo', N'Đen', 'L', 100000, 0, N'', 10)

insert into Product
values('chanvaynu.webp', N'Chân Váy Nữ', N'Quần Áo', N'Trắng', 'S', 100000, 0, N'', 10)
insert into Product
values('chanvaynu.webp', N'Chân Váy Nữ', N'Quần Áo', N'Trắng', 'M', 100000, 0, N'', 10)
insert into Product
values('chanvaynu.webp', N'Chân Váy Nữ', N'Quần Áo', N'Trắng', 'L', 100000, 0, N'', 10)
insert into Product
values('chanvaynu.webp', N'Chân Váy Nữ', N'Quần Áo', N'Đen', 'S', 100000, 0, N'', 10)
insert into Product
values('chanvaynu.webp', N'Chân Váy Nữ', N'Quần Áo', N'Đen', 'M', 100000, 0, N'', 10)
insert into Product
values('chanvaynu.webp', N'Chân Váy Nữ', N'Quần Áo', N'Đen', 'L', 100000, 0, N'', 10)


insert into Product
values('vaynu.webp', N'Váy Nữ', N'Quần Áo', N'Trắng', 'S', 100000, 0, N'', 10)
insert into Product
values('vaynu.webp', N'Váy Nữ', N'Quần Áo', N'Trắng', 'M', 100000, 0, N'', 10)
insert into Product
values('vaynu.webp', N'Váy Nữ', N'Quần Áo', N'Trắng', 'L', 100000, 0, N'', 10)
insert into Product
values('vaynu.webp', N'Váy Nữ', N'Quần Áo', N'Đen', 'S', 100000, 0, N'', 10)
insert into Product
values('vaynu.webp', N'Váy Nữ', N'Quần Áo', N'Đen', 'M', 100000, 0, N'', 10)
insert into Product
values('vaynu.webp', N'Váy Nữ', N'Quần Áo', N'Đen', 'L', 100000, 0, N'', 10)
insert into Product
values('vaynu.webp', N'Váy Nữ', N'Quần Áo', N'Xám', 'S', 100000, 0, N'Váy nữ xám S', 21)
insert into Product
values('vaynu.webp', N'Váy Nữ', N'Quần Áo', N'Xám', 'M', 100000, 0, N'', 11)
insert into Product
values('vaynu.webp', N'Váy Nữ', N'Quần Áo', N'Xám', 'L', 100000, 0, N'', 32)
insert into Product
values('vaynu.webp', N'Váy Nữ', N'Quần Áo', N'Xám', 'XL', 100000, 0, N'', 77)

create table Bill
(
	id char(10) primary key,
	date datetime default getdate(),
	status char(100) default 'unpaid',
	discount float default 0,
	note nvarchar(1000),
	customer char(100),
)
go
insert into Bill
	(id)
values('bill0002')
UPDATE Bill
        SET
            date = GETDATE() where id = 'bill0002'
create table BillingDetails
(
	id char(10) primary key,
	idBill char(10),
	sizeProduct char(10) not null,
	price float default 0,
	nameProduct nvarchar(100) not null,
	colorProduct nvarchar(100) not null,
	quantity int default 1,

	FOREIGN KEY (idBill)
  REFERENCES Bill(id) ON DELETE CASCADE,
	FOREIGN KEY (nameProduct , colorProduct , sizeProduct)
  REFERENCES Product(name , color , size) ON DELETE CASCADE,
)
go
insert into BillingDetails
values('bdt001' , 'bill0001', 'L' , 100000 , N'Áo Khoác Nữ' , N'Đen' , 1 )
insert into BillingDetails
values('bdt002' , 'bill0001', 'M' , 100000 , N'Áo Khoác Nữ' , N'Đen' , 1 )
go
create view Inventory
as
	(
	SELECT idBill, name, color , size , inventory , quantity
	FROM Product
		inner join BillingDetails on Product.name = BillingDetails.nameProduct
			and Product.size = BillingDetails.sizeProduct
			and Product.color = BillingDetails.colorProduct
		inner join Bill on Bill.id = BillingDetails.idBill)
go
alter trigger totalInventoryProduct
ON Bill
after update
AS
BEGIN
	DECLARE @id char(10)
	DECLARE @beforeStatus char(100)
	SELECT @beforeStatus = status
	FROM deleted
	DECLARE @afterStatus char(100)
	SELECT @afterStatus = status , @id = id
	FROM inserted
	if(@beforeStatus = 'unpaid' and @afterStatus = 'paid')
	begin
		if EXISTS ( SELECT *
		FROM Inventory
		where Inventory.inventory < Inventory.quantity and idBill = @id)
		begin
			rollback tran
		end
		else
		begin
			update Inventory set inventory = inventory-quantity where idBill = @id
		end
	end
END
go

CREATE PROCEDURE UpsertProduct
	(
	@img CHAR(100),
	@name NVARCHAR(100),
	@category NVARCHAR(100),
	@color NVARCHAR(100),
	@size CHAR(10),
	@price FLOAT,
	@discount FLOAT,
	@describe NVARCHAR(1000),
	@inventory FLOAT
)
AS
BEGIN
	SET NOCOUNT ON;

	IF EXISTS (SELECT 1
	FROM Product
	WHERE name = @name AND color = @color AND size = @size)
    BEGIN
		UPDATE Product
        SET
            img = @img,
            category = @category,
            price = @price,
            discount = @discount,
            describe = @describe,
            inventory = @inventory
        WHERE name = @name AND color = @color AND size = @size;
	END
    ELSE
    BEGIN
		INSERT INTO Product
			(img, name, category, color, size, price, discount, describe, inventory)
		VALUES
			(@img, @name, @category, @color, @size, @price, @discount, @describe, @inventory);
	END
END;
go
alter PROCEDURE UpdateOrInsertBill
	@id CHAR(10),
	@date DATETIME,
	@status CHAR(100),
	@discount FLOAT,
	@note NVARCHAR(1000),
	@customer char(100)
AS
BEGIN
	SET NOCOUNT ON;
	IF EXISTS (SELECT 1
	FROM Bill
	WHERE id = @id)
    BEGIN
		UPDATE Bill
        SET
            date = @date,
            status = @status,
            discount = @discount,
            note = @note,
			customer = @customer
        WHERE
            id = @id
	END
    ELSE
    BEGIN
		INSERT INTO Bill
			(id, date, status, discount, note , customer)
		VALUES
			(@id, @date, @status, @discount, @note , @customer)
	END
END
go

alter trigger handleInsertBillingDetails
ON BillingDetails
INSTEAD of insert
as
begin
	DECLARE @name nvarchar(100)
	DECLARE @color nvarchar(100)
	DECLARE @size nvarchar(10)
	DECLARE @idbill char(10)
	DECLARE @quantity int
	SELECT @quantity = quantity , @idbill = idBill , @name = nameProduct , @color = colorProduct , @size = sizeProduct
	FROM inserted
	print @name
	IF EXISTS (SELECT 1
	FROM BillingDetails
	WHERE idBill = @idbill and nameProduct = @name and colorProduct = @color and sizeProduct = @size)
	begin
		print 'update'
		update BillingDetails set quantity = quantity + @quantity
		where idBill = @idbill and nameProduct = @name and colorProduct = @color and sizeProduct = @size
	end
	else
	begin
		print 'insert'
		insert into BillingDetails
			(idBill , nameProduct ,sizeProduct,colorProduct,price,quantity)
		select idBill , nameProduct , sizeProduct, colorProduct, price, quantity
		from inserted
	end
end