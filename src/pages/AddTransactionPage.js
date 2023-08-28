import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import RecitExtractor from '../components/recit-extractor/RecitExtractor';
// components
import Label from '../components/label';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';
// mock
import USERLIST from '../_mock/user';
import TransactionStep from '../components/transaction-step/TransactionStep';

// ----------------------------------------------------------------------

export default function AddTransactionPage() {

  return (
    <TransactionStep/>
    );
}
